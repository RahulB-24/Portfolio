import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 font-display">
            <span className="text-violet-400">04.</span> Projects
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl text-xl font-medium">
            A showcase of my technical projects, ranging from full-stack web applications to deployed machine learning systems.
          </p>
        </motion.div>

        {/* Featured Projects List with Alternating Layout */}
        <div className="flex flex-col gap-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-full lg:w-[70%] ${isEven ? 'self-start' : 'self-end'}`}
              >
                <div className="group relative flex flex-col h-full bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-3xl overflow-hidden transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-900/10 hover:-translate-y-2">
                  {/* Decorative Gradient Blob - Alternating Position */}
                  <div className={`absolute top-0 ${isEven ? 'right-0 -mr-20' : 'left-0 -ml-20'} -mt-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-500`}></div>

                  <div className="p-10 md:p-12 flex flex-col flex-grow relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="bg-violet-500/10 p-4 rounded-xl border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                        <Folder className="text-violet-400" size={32} />
                      </div>

                      <div className="flex gap-5">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-violet-400 transition-colors p-1" aria-label="GitHub">
                            <Github size={28} />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-violet-400 transition-colors p-1" aria-label="Live Demo">
                            <ExternalLink size={28} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-violet-400 transition-colors flex items-center gap-3 font-display">
                      {project.title}
                      <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-violet-400" size={32} />
                    </h3>

                    <div className="mb-10 flex-grow">
                      <ul className="space-y-4">
                        {project.description.map((desc, i) => (
                          <li key={i} className="text-neutral-300 text-xl leading-relaxed pl-6 relative before:content-[''] before:absolute before:left-0 before:top-3.5 before:w-2 before:h-2 before:bg-violet-500/50 before:rounded-full font-medium">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 border-t border-neutral-800/50 flex flex-wrap gap-3 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-base font-semibold text-violet-300/90 bg-violet-950/40 px-5 py-2 rounded-lg border border-violet-900/40">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;