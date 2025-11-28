import React from 'react';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight flex items-center gap-2">
    {children}
  </h2>
);

export default SectionHeading;