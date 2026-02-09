import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'rahulbalachandar024@gmail.com';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-40 relative border-t border-neutral-900/50">
      <div className="max-w-4xl mx-auto px-8 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">Connect with Me</h2>
          <p className="text-neutral-400 text-xl md:text-2xl font-medium mb-16 leading-relaxed">
            I'm currently looking for new opportunities as a Software Engineer.
            Whether you have a question about my stack, a project idea, or just want to connect, feel free to reach out.
          </p>

          {!showEmail ? (
            <button
              onClick={() => setShowEmail(true)}
              className="inline-flex items-center gap-3 px-10 py-5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold text-xl transition-all hover:-translate-y-1 mb-20 shadow-xl shadow-violet-900/30 cursor-pointer"
            >
              <Mail size={24} />
              Say Hello
            </button>
          ) : (
            <div className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 border border-violet-500/50 text-white rounded-xl font-bold text-xl mb-20 shadow-xl shadow-violet-900/30">
              <Mail size={24} className="text-violet-400" />
              <span className="text-violet-300">{email}</span>
              <button
                onClick={handleCopy}
                className="ml-2 p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                title="Copy email"
              >
                {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} className="text-neutral-400 hover:text-white" />}
              </button>
            </div>
          )}

          <div className="flex justify-center gap-12 mb-16">
            <a
              href={SOCIAL_LINKS.github}
              className="flex flex-col items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              target="_blank" rel="noreferrer"
            >
              <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-full group-hover:border-violet-500/50 transition-colors group-hover:text-violet-400 backdrop-blur-sm shadow-lg">
                <Github size={32} />
              </div>
              <span className="text-lg font-semibold">GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="flex flex-col items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              target="_blank" rel="noreferrer"
            >
              <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-full group-hover:border-violet-500/50 transition-colors group-hover:text-violet-400 backdrop-blur-sm shadow-lg">
                <Linkedin size={32} />
              </div>
              <span className="text-lg font-semibold">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;