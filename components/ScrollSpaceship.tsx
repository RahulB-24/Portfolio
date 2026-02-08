import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollSpaceship: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isDragging, setIsDragging] = useState(false);
  
  // Smooth spring animation for position
  // Map scroll 0-1 to viewport height (2vh to 92vh)
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ['2vh', '92vh']), {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Handle Drag-to-Scroll
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const vh = window.innerHeight;
      const trackTop = vh * 0.02; // 2vh
      // Track goes from 2vh to 92vh, so height is 90vh
      const trackHeight = vh * 0.90; 
      
      // Calculate progress based on mouse Y relative to track
      let relativeY = e.clientY - trackTop;
      // Clamp values
      if (relativeY < 0) relativeY = 0;
      if (relativeY > trackHeight) relativeY = trackHeight;
      
      const progress = relativeY / trackHeight;
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update window scroll
      window.scrollTo({
        top: progress * totalScrollable,
        behavior: 'instant' // Instant is smoother for dragging
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isDragging]);

  return (
    <div className="fixed right-4 md:right-8 top-0 h-screen w-12 z-40 pointer-events-none hidden sm:block">
      {/* Simple vertical line track */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[2vh] bottom-[8vh] w-px bg-neutral-800/50" />
      
      {/* Terminal Cursor Indicator */}
      <motion.div
        style={{ top: y }}
        className="absolute left-1/2 -translate-x-1/2 -ml-[1px] w-auto h-auto flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
           {/* The Cursor Box */}
           <div className={`
             bg-neutral-950 border px-2 py-1 rounded font-mono text-xs font-bold shadow-[0_0_10px_rgba(139,92,246,0.2)] whitespace-nowrap transition-colors duration-200
             ${isDragging ? 'border-violet-400 text-violet-300 bg-neutral-900' : 'border-violet-500/50 text-violet-400'}
           `}>
              {">_"}
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollSpaceship;