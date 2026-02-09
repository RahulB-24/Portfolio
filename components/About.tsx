import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-6">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 items-start">

          <motion.div
            className="md:col-span-7 space-y-10 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-3 md:gap-4 font-display">
              <span className="text-violet-400">01.</span> About Me
            </h2>

            <div className="space-y-6 text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              <p>
                I am a B.Tech Computer Science and Engineering student specializing in AI and Machine Learning at <strong className="text-violet-400 font-bold">VIT Chennai</strong>, with a strong focus on software engineering and backend systems. I enjoy building reliable, production-grade applications using technologies like <strong className="text-violet-400 font-bold">Java, Spring Boot, Node.js, React, and PostgreSQL</strong>. My interests lie in designing clean APIs, scalable system architectures, and full-stack products that solve real problems rather than just building demos.
              </p>
              <p>
                During my internship at <strong className="text-violet-400 font-bold">TANSAM</strong>, I worked on a real-world deployed system for automated water quality testing, where I helped build a two-stage machine learning pipeline integrated into a production-ready Flask API and React frontend. The system was used in a public sector workflow and significantly reduced manual testing time while maintaining high accuracy. This experience taught me how to think beyond models and focus on system integration, reliability, and real-world constraints.
              </p>
              <p>
                Through projects like <strong className="text-violet-400 font-bold">ExpenseOps, LinkShelf, and MoodCast</strong>, I have built full-stack systems involving authentication, role-based access control, data modeling, performance optimization, and API design. I am comfortable working with <strong className="text-violet-400 font-bold">Java, Python, C++, and TypeScript</strong>, and I enjoy learning by building and refining real systems. I am currently looking for software engineering opportunities where I can contribute to building robust products and continue growing as an engineer.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 p-5 sm:p-6 md:p-10 rounded-2xl shadow-2xl hover:border-neutral-600 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 md:mb-8 font-display">Education</h3>
              <div className="flex items-start gap-4 md:gap-5">
                <div className="mt-1 p-2 sm:p-3 bg-neutral-800 rounded-lg text-violet-400 border border-neutral-700 flex-shrink-0">
                  <GraduationCap size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-lg sm:text-xl font-bold text-neutral-100">Vellore Institute of Technology</h4>
                  <p className="text-base sm:text-lg text-neutral-400 font-medium leading-snug mb-2">B.Tech in Computer Science and Engineering (AIML Specialization)</p>
                  <p className="text-sm sm:text-base text-neutral-500 font-medium">
                    Chennai, India • Aug 2023 – May 2027 (Expected)
                  </p>
                  <p className="text-sm sm:text-base text-neutral-400 mt-2 font-medium">CGPA: 8.65</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;