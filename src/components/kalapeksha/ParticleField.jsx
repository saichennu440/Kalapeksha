import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParticleField() {
  const { scrollYProgress } = useScroll();
  const bgHue = useTransform(scrollYProgress, [0, 0.5, 1], [190, 220, 30]);

  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 3,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 4,
      isGold: i % 3 === 0,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Shifting background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.3, 0.6, 1],
            [
              'radial-gradient(ellipse at 20% 50%, rgba(42,82,190,0.04) 0%, transparent 50%)',
              'radial-gradient(ellipse at 60% 30%, rgba(42,82,190,0.06) 0%, transparent 50%)',
              'radial-gradient(ellipse at 40% 60%, rgba(255,127,80,0.04) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 80%, rgba(212,175,55,0.06) 0%, transparent 50%)',
            ]
          )
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.isGold ? 'bg-gold/20' : 'bg-foreground/5'}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}