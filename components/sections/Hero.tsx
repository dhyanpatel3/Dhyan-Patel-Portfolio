import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Globe,
  ArrowUpRight,
  Download,
  FileText,
  Send,
} from "lucide-react";
import { socialLinks } from "../../data";
import TiltCard from "../ui/TiltCard";

interface HeroProps {
  containerVariants: Variants;
  itemVariants: Variants;
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({
  containerVariants,
  itemVariants,
  isDarkMode,
}) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      variants={containerVariants}
      className="mb-24 scroll-mt-36"
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8 mb-10 text-center sm:text-left">
        <motion.div variants={itemVariants} className="flex-1">
          <motion.h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 inline-block pb-2">
              Hi, I'm Dhyan Patel
            </span>
          </motion.h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto sm:mx-0 leading-relaxed font-light mb-8">
            Full-Stack Developer crafting modern, responsive web applications
            with{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              React
            </span>{" "}
            &{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Node.js
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="https://drive.google.com/file/d/1AAW8lVRZD0PqsONs8Pa9g-0XyMXrSlA4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-sm"
            >
              <FileText size={16} />
              <span>Resume / CV</span>
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              <Send size={16} />
              <span>Get in touch</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="shrink-0 flex justify-center sm:justify-end"
        >
          {/* 3D Tilt Avatar */}
          <div className="w-32 h-32 sm:w-40 sm:h-40">
            <TiltCard className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-2xl flex items-center justify-center overflow-visible">
              <img
                src="/avatar.png"
                alt="Dhyan Patel"
                className="w-[90%] h-[90%] object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(50px)" }}
              />
              {/* Decorative Element floating behind */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl -z-10 blur-xl"
                style={{ transform: "translateZ(-20px)" }}
              />
            </TiltCard>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-12 items-center justify-center sm:justify-start"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm">
          <MapPin size={15} className="text-zinc-700 dark:text-zinc-300" />
          <span>Vadodara, Gujarat</span>
        </div>
        <a
          href="https://dhyanpatel.dev"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
        >
          <Globe size={15} className="text-zinc-700 dark:text-zinc-300" />
          <span>dhyanpatel.dev</span>
        </a>
      </motion.div>

      {/* Social Links Grid (Bento Style) */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/20 transition-all duration-300 cursor-pointer"
          >
            <div
              className="p-2.5 rounded-lg transition-colors duration-300 border border-transparent"
              style={{
                backgroundColor: isDarkMode ? "#27272a" : link.bg,
                color:
                  isDarkMode && (link.name === "GitHub" || link.name === "X")
                    ? "#f4f4f5"
                    : link.color,
              }}
            >
              <link.icon size={20} />
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {link.name}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                {link.username}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors translate-x-[-4px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
