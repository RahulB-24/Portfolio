import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section className="py-12 border-t border-neutral-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-950/60 backdrop-blur-sm border border-neutral-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-900 rounded-full text-violet-500 hidden md:block border border-neutral-800">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Publications / Research</h3>
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="mt-2">
                  <p className="text-neutral-300 font-medium italic">"{pub.title}"</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    <span className="text-violet-400">{pub.conference}</span> • {pub.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;