
import React from 'react';
import { motion, Variants } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import { techStack } from '../../data';

interface SkillsProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const Skills: React.FC<SkillsProps> = ({ containerVariants, itemVariants }) => {
  return (
    <motion.section 
      id="skills"
      className="mb-24 scroll-mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeading>Skills</SectionHeading>
      </motion.div>
      
      {/* 
         Updated Grid:
         - grid-cols-4 (Base/Mobile): Makes cards smaller (25% width) immediately.
         - xs:grid-cols-5: On slightly larger phones/small tablets.
         - gap-3: Tighter spacing for mobile.
      */}
      <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3 sm:gap-5 perspective-1000">
        {techStack.map((tech) => (
          <motion.div 
            key={tech.name} 
            variants={itemVariants}
            className="aspect-square w-full" 
          >
            <TiltCard className="group h-full w-full rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl dark:hover:shadow-zinc-900/50 transition-all duration-300">
              
              <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* 
                   Tooltip:
                   - Added `hidden sm:block`: Hides tooltip entirely on mobile to prevent overflow/visual clutter.
                */}
                <div 
                  className="hidden sm:block absolute -top-10 left-1/2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] sm:text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 whitespace-nowrap shadow-xl"
                  style={{ transform: "translateZ(60px) translateX(-50%)" }}
                >
                  {tech.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45 -z-10 rounded-[1px]"></div>
                </div>

                {/* 
                   Icon:
                   - Reduced base size: w-8 h-8 (32px) for mobile.
                   - Scales up on larger screens.
                */}
                <div 
                  className="flex items-center justify-center pointer-events-none"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <img 
                    src={tech.iconUrl} 
                    alt={tech.name} 
                    className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 object-contain grayscale-0 transition-transform duration-300 drop-shadow-xl group-hover:scale-110 ${['GitHub', 'Express'].includes(tech.name) ? 'dark:invert' : ''}`}
                  />
                </div>
                
              </div>
              
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
