import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const titles = ["Software Engineer", "Full-Stack Developer", "Backend Architect", "ML Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-950/40 border border-violet-800/50 text-violet-300 text-sm md:text-base font-mono font-medium mb-6">
            <Terminal size={16} />
            <span>Hello World</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none text-white mb-6 font-display">
            Rahul <br className="md:hidden" /> Balachandar
          </h1>

          <div className="h-16 md:h-20 overflow-hidden relative mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-5xl font-semibold text-violet-400 absolute w-full left-0 right-0 font-display"
              >
                {titles[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="max-w-3xl text-xl md:text-2xl text-neutral-400 leading-relaxed mx-auto font-medium">
            Building reliable <span className="text-neutral-100 font-semibold">backend systems</span> and scalable applications.
            Bridging the gap between software engineering and applied machine learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-10 justify-center items-center">
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-xl shadow-violet-900/30"
            >
              View Work
              <ArrowRight size={20} />
            </a>

            <a
              href={SOCIAL_LINKS.resume}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 text-white rounded-xl font-bold text-lg transition-all"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;