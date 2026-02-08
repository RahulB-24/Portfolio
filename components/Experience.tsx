import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 mb-16 font-display"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-violet-400">03.</span> Experience
        </motion.h2>

        <div className="relative border-l-2 border-neutral-800 ml-3 md:ml-6 space-y-20">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index}
              className="relative pl-10 md:pl-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Simple Timeline dot */}
              <div className="absolute -left-[11px] top-3 p-1.5 bg-neutral-950 rounded-full border-2 border-neutral-600 text-violet-400">
                  <div className="w-2.5 h-2.5 bg-violet-400 rounded-full"></div>
              </div>

              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 font-display">
                   {job.company}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xl">
                   <span className="text-violet-400 font-bold">{job.role}</span>
                   {job.duration && <span className="text-neutral-500 font-medium text-base sm:text-lg">• {job.duration}</span>}
                </div>
              </div>
              
              <div className="bg-neutral-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-neutral-800 hover:border-neutral-600 transition-colors shadow-sm">
                <ul className="space-y-5">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-neutral-300">
                      <span className="mt-3 h-2 w-2 rounded-full bg-violet-500 flex-shrink-0" />
                      <span className="leading-relaxed text-xl font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;