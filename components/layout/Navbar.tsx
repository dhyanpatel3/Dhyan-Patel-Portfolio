import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "../../data";

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleTheme: () => void;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isDarkMode,
  toggleTheme,
  scrollToSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none gap-2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-2 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/60 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full transition-all duration-500 ease-out max-w-[calc(100vw-2rem)] sm:max-w-none overflow-hidden"
      >
        {/* Logo Icon inside Nav */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="w-9 h-9 bg-zinc-900 dark:bg-zinc-50 rounded-full flex items-center justify-center text-white dark:text-zinc-900 mr-1 shadow-md shrink-0 transition-all duration-500 cursor-pointer hover:scale-105 active:scale-95"
        >
          <Code2 size={18} strokeWidth={2.5} />
        </a>

        {/* Desktop Nav Items */}
        <ul className="hidden sm:flex items-center gap-1 px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.name} className="shrink-0">
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-colors duration-500 whitespace-nowrap block ${
                    isActive
                      ? "text-white dark:text-zinc-950"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zinc-900 dark:bg-zinc-50 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden sm:block w-px h-4 bg-zinc-200 dark:bg-zinc-800 mx-1 sm:mx-2 shrink-0 transition-colors duration-500" />

        <button
          onClick={toggleTheme}
          className="p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-500 shrink-0"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? "moon" : "sun"}
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all duration-500 shrink-0"
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "backOut" }}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="pointer-events-auto sm:hidden w-full max-w-xs bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl border border-zinc-200/60 dark:border-zinc-800 shadow-2xl rounded-2xl p-2 overflow-hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        scrollToSection(e, item.href);
                        setIsMenuOpen(false);
                      }}
                      className={`relative px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 block text-center ${
                        isActive
                          ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
