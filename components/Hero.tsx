import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-8 md:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-10"
        >
          <p className="text-2xl md:text-3xl text-neutral-400 font-medium mb-2">Hey, I'm</p>

          <div className="relative inline-block mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-none text-white font-display">
              Rahul <br className="md:hidden" /> Balachandar
            </h1>
            <div className="mt-4 mx-auto w-1/2 h-1 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          </div>

          <p className="text-2xl md:text-4xl font-semibold text-violet-400 font-display mb-8">
            Software Engineer
          </p>

          <p className="max-w-4xl text-lg md:text-xl text-neutral-400 leading-relaxed mx-auto font-medium">
            Building backend systems, scalable applications, and AI-powered software.
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
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 text-white rounded-xl font-bold text-lg transition-all"
            >
              <FileText size={20} />
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;