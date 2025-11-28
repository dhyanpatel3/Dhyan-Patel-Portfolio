import React from "react";
import { motion, Variants } from "framer-motion";
import { Github, Globe, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { projects } from "../../data";

interface ProjectsProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

const Projects: React.FC<ProjectsProps> = ({
  containerVariants,
  itemVariants,
}) => {
  return (
    <motion.section
      id="projects"
      className="mb-24 scroll-mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <SectionHeading>Projects</SectionHeading>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="w-full md:w-[calc(50%-0.75rem)]"
          >
            <Card className="h-full group flex flex-col gap-0 relative overflow-hidden bg-white dark:bg-zinc-900 !p-0 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/30 transition-shadow duration-500">
              {project.imageUrl && (
                <div className="w-full aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative border-b border-zinc-100 dark:border-zinc-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-md border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5 text-sm font-medium pt-4 border-t border-dashed border-zinc-100 dark:border-zinc-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group/link"
                    >
                      <Github
                        size={14}
                        className="group-hover/link:scale-110 transition-transform"
                      />
                      Source Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors group/link"
                    >
                      <Globe
                        size={14}
                        className="group-hover/link:scale-110 transition-transform"
                      />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
