import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function ContactParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        const distanceX = mousePosition.x - particle.x;
        const distanceY = mousePosition.y - particle.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const force = Math.max(0, (30 - distance) / 30);

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/30 backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: distanceX * force * 20,
              y: distanceY * force * 20,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 },
              scale: {
                duration: 3,
                repeat: Infinity,
                delay: particle.delay,
              },
              opacity: {
                duration: 3,
                repeat: Infinity,
                delay: particle.delay,
              },
            }}
          />
        );
      })}
    </div>
  );
}
