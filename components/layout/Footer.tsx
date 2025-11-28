import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
      <p>© {new Date().getFullYear()} Dhyan Patel.</p>
      <div className="flex items-center gap-6">
        <a href="https://github.com/dhyanpatel3" target="_blank" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/dhyan-patel3" target="_blank" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">LinkedIn</a>
        <a href="mailto:dp28dhyan@gmail.com" target="_blank" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">Email</a>
      </div>
    </footer>
  );
};

export default Footer;