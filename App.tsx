import React, { useState, useEffect } from "react";
import { Variants, AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Lenis from "lenis";

// Layout & Sections
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Preloader from "./components/ui/Preloader";
import { navItems } from "./data";

// --- MAIN APP ---

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Initialize Theme (Default to Light)
  useEffect(() => {
    setIsDarkMode(false);
    document.documentElement.classList.remove("dark");
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.7,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    // Play sound effect
    const audio = new Audio("/switch.mp3");
    audio.volume = 0.5;
    audio.play().catch(() => {
      // Ignore errors if user hasn't interacted with document yet or file missing
    });

    setIsTransitioning(true);
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Handle Scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset logic: triggers when the section is near the top or taking up most of the view
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  // --- REFINED ANIMATIONS ---
  // Using a blur-up effect for a more modern, smooth feel
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly slower stagger for elegance
        delayChildren: 0.1,
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 25,
      opacity: 0,
      filter: "blur(4px)", // The key to smooth "apple-like" reveal
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 70, // Lower stiffness = softer movement
        damping: 18, // Higher damping = less bounce, more slide
        mass: 0.8,
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={() => setShowContent(true)}>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div
        className={`min-h-screen relative bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-all duration-500 ease-in-out ${
          isTransitioning ? "blur-sm scale-[0.98]" : ""
        }`}
      >
        {/* Background Dot Pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.35] dark:opacity-[0.25] transition-opacity duration-500"
          style={{
            backgroundImage: `radial-gradient(${
              isDarkMode ? "#71717a" : "#a1a1aa"
            } 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(circle at center, black 60%, transparent 100%)", // Fade out edges
          }}
        />

        <Navbar
          activeSection={activeSection}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
        />

        {/* Main Content */}
        <motion.main
          className="max-w-3xl mx-auto px-6 pt-36 pb-20 relative z-10"
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Hero
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            isDarkMode={isDarkMode}
          />

          <About
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          <Skills
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          <Projects
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          <Contact
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />

          <Footer />
        </motion.main>
      </div>
      <Analytics />
    </>
  );
};

export default App;
