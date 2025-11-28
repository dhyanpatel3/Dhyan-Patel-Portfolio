import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

interface AboutProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const About: React.FC<AboutProps> = ({ containerVariants, itemVariants }) => {
  return (
    <motion.section 
      id="about" 
      className="mb-20 scroll-mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
         <SectionHeading>About</SectionHeading>
      </motion.div>
      <motion.div variants={itemVariants} className="prose prose-zinc dark:prose-invert text-zinc-600 dark:text-zinc-400 leading-7 text-[15px]">
        <p className="mb-4">
          I am Full-Stack Developer passionate about creating high-performance, user-centric software solutions.
          With a strong foundation in <span className="font-semibold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700">React.js, Node.js, and Express</span>, I specialize in building scalable web applications that solve real-world problems.
        </p>
        <p>
          Currently In Final-year of my B.Tech in Information Technology, I love exploring generative AI technologies and have built tools integrating the <span className="font-semibold text-zinc-900 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-700">API's</span>. 
          My focus is on writing clean, maintainable code and delivering intuitive user interfaces using Tailwind CSS.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;