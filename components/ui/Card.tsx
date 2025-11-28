import React from 'react';
import { motion } from 'framer-motion';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;