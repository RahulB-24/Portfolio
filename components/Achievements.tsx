import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 font-display">
            <span className="text-violet-400">06.</span> Achievements
          </h2>
        </motion.div>

        <div className="space-y-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20 flex-shrink-0">
                  <Trophy size={24} className="text-violet-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors font-display">
                      {achievement.title}
                    </h3>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-mono text-violet-400 mt-1 font-semibold">{achievement.source}</p>
                  {achievement.description && (
                    <p className="text-base md:text-lg text-neutral-400 mt-3 leading-relaxed font-medium">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
