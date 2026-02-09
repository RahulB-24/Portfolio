import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 mb-6 font-display">
            <span className="text-violet-400">02.</span> Technical Skills
          </h2>
          <p className="text-neutral-400 text-xl font-medium max-w-2xl">
            A comprehensive toolkit focused on building scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="space-y-16">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid md:grid-cols-12 gap-8 md:gap-16 items-start border-b border-neutral-800/50 pb-16 last:border-0"
            >
              {/* Category Header */}
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-neutral-200 flex items-center gap-3 font-display">
                  <category.icon size={24} className="text-violet-400" />
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-4 p-6 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-neutral-500 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <i className={`${skill.icon} text-5xl`}></i>
                    <span className="text-base font-semibold text-neutral-300 group-hover:text-white text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;