import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4 font-display">
            <span className="text-violet-400">05.</span> Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-5 right-5 z-20 bg-neutral-900/80 p-3 rounded-full text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={20} />
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-sm font-mono text-violet-400 mb-1 font-semibold">{cert.issuer}</div>
                  <div className="text-sm text-neutral-500 font-medium">{cert.date}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors flex items-center gap-2 font-display">
                  <Award size={24} className="text-violet-500" />
                  {cert.title}
                </h3>
                <ul className="text-base text-neutral-400 space-y-2 font-medium">
                  {cert.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;