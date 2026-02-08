import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    
    // Code snippets to display (more than just keywords)
    const snippets = [
      { text: "const app = express();", color: "#a78bfa" }, // violet-400
      { text: "await mongoose.connect(db);", color: "#22d3ee" }, // cyan-400
      { text: "return <Component />;", color: "#f472b6" }, // pink-400
      { text: "console.log('Hello');", color: "#34d399" }, // emerald-400
      { text: "import { useState } from 'react';", color: "#a78bfa" },
      { text: "export default App;", color: "#a78bfa" },
      { text: "if (isLoading) return;", color: "#f472b6" },
      { text: "const [data, setData] = useState(null);", color: "#22d3ee" },
      { text: "function handler(e) {", color: "#e879f9" },
      { text: "npm install dependencies", color: "#94a3b8" }, // slate-400
      { text: "git commit -m 'feat: init'", color: "#94a3b8" },
      { text: "docker-compose up -d", color: "#38bdf8" }, // sky-400
      { text: "res.status(200).json(data);", color: "#22d3ee" },
      { text: "chmod +x script.sh", color: "#facc15" }, // yellow-400
      { text: "while (true) {", color: "#f472b6" },
      { text: "class User extends Model", color: "#a78bfa" }
    ];

    interface Particle {
      x: number;
      y: number;
      text: string;
      color: string;
      size: number;
      velocity: number;
      opacity: number;
      fadeIn: boolean;
      maxOpacity: number;
    }

    let particles: Particle[] = [];
    const PARTICLE_COUNT = 25; // Reduced count for less clutter

    const init = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
      }
    };

    const createParticle = (): Particle => {
      const snippet = snippets[Math.floor(Math.random() * snippets.length)];
      return {
        x: Math.random() * (width - 100), 
        // Spawn randomly across the entire height
        y: Math.random() * (height + 20), 
        text: snippet.text,
        color: snippet.color,
        size: Math.random() * 4 + 12, 
        velocity: Math.random() * 0.2 + 0.1, // Slower drift
        opacity: 0,
        fadeIn: true,
        // VERY LOW OPACITY: Range from 0.03 to 0.12 (3% to 12% opacity)
        // This ensures it is just barely visible background texture
        maxOpacity: Math.random() * 0.09 + 0.03 
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        ctx.font = `${p.size}px 'Fira Code', monospace`;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.fillText(p.text, p.x, p.y);
        ctx.globalAlpha = 1.0; 

        // Move upwards
        p.y -= p.velocity;

        // Opacity animation (Very slow fade in/out)
        if (p.fadeIn) {
          p.opacity += 0.002; 
          if (p.opacity >= p.maxOpacity) p.fadeIn = false;
        } else {
          p.opacity -= 0.001; 
        }

        // Reset if off screen or fully transparent
        if (p.y < -30 || (p.opacity <= 0 && !p.fadeIn)) {
          Object.assign(p, createParticle());
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    init();
    const animationId = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default InteractiveBackground;