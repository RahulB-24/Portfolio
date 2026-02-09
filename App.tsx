import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollSpaceship from './components/ScrollSpaceship';

const App: React.FC = () => {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-300 selection:bg-violet-500/30 selection:text-violet-200 relative isolate overflow-x-hidden">
      {/* Static ambient top-light for depth - Moved to z-[-1] to stay behind interactive elements */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950"></div>

      {/* Dynamic interactive cursor glow and code rain */}
      <InteractiveBackground />

      {/* Scroll Progress Spaceship */}
      <ScrollSpaceship />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Publications />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;