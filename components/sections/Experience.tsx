import React from "react";
import { motion, Variants } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../../data";

interface ExperienceProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const Experience: React.FC<ExperienceProps> = ({
  containerVariants,
  itemVariants,
}) => {
  return (
    <motion.section
      id="experience"
      className="mb-24 scroll-mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeading>Experience</SectionHeading>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl dark:hover:shadow-zinc-900/50 hover:-translate-y-1 transition-all duration-500 p-6 sm:p-8"
          >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-zinc-900/5 dark:bg-white/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold font-mona tracking-tight text-zinc-900 dark:text-zinc-100">
                  {exp.role}
                </h3>
                <h4 className="text-[15px] sm:text-base font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h4>
              </div>
              <div className="mt-2 sm:mt-0 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full w-fit">
                <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {exp.period}
                </span>
              </div>
            </div>

            {exp.description && (
              <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
