import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, FileText } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      let current = '';

      // Check if we are at the top for Hero (implicit)
      if (window.scrollY < 200) {
          current = '';
      } else {
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // If top of section is within the top half of viewport
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                    current = section;
                }
            }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
      scrolled 
        ? 'bg-neutral-950/95 border-neutral-800 py-3' 
        : 'bg-neutral-950/0 border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-end md:justify-center items-center relative">
        
        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`transition-colors relative py-2 ${
                  activeSection === link.id ? 'text-violet-400' : 'hover:text-violet-400'
                }`}
              >
                {link.name}
                {/* Active Indicator - Solid Color */}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeSection" 
                    className="absolute -bottom-0 left-0 w-full h-0.5 bg-violet-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-neutral-800 mx-2"></div>

          <div className="flex items-center gap-4">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
             <a 
              href={SOCIAL_LINKS.resume}
              download
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-md text-xs font-semibold text-white transition-all ml-2"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle - Right aligned */}
        <button 
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-950 border-b border-neutral-800 py-6 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-lg font-medium transition-colors ${
                activeSection === link.id ? 'text-violet-400' : 'text-neutral-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4 pt-4 border-t border-neutral-800">
             <a href={SOCIAL_LINKS.github} className="text-neutral-400 hover:text-white"><Github size={24} /></a>
             <a href={SOCIAL_LINKS.linkedin} className="text-neutral-400 hover:text-white"><Linkedin size={24} /></a>
             <a href={SOCIAL_LINKS.resume} download className="flex items-center gap-2 text-violet-400 font-medium"><FileText size={20} /> Resume</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;