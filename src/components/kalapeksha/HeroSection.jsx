import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection({ heroImage }) {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const refractionX = (mousePos.x - 0.5) * 20;
  const refractionY = (mousePos.y - 0.5) * 15;

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="hero">
      {/* Background image layer */}
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <img
          src={heroImage}
          alt="Swirling resin art with deep teal and orange pigments, gold leaf suspended in clear epoxy"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/40 to-void" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${15 + i * 11}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main title */}
      <motion.div
        className="relative z-10 text-center w-full px-4"
        style={{ opacity: heroOpacity, y: textY }}
      >
        <motion.h1
          className="font-cormorant font-light text-foreground select-none w-full"
          style={{
            fontSize: 'clamp(2.2rem, 9vw, 10rem)',
            letterSpacing: 'clamp(0.05em, 1.5vw, 0.3em)',
            textShadow: `${refractionX * 0.3}px ${refractionY * 0.3}px 0px rgba(42,82,190,0.3), ${-refractionX * 0.2}px ${-refractionY * 0.2}px 0px rgba(255,127,80,0.2)`,
            transform: `translate(${refractionX * 0.1}px, ${refractionY * 0.1}px)`,
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap',
          }}
        >
          KALAPEKSHA
        </motion.h1>
        <motion.p
          className="font-mono text-xs tracking-[0.5em] text-muted-foreground mt-6 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          The Alchemy of Resin
        </motion.p>
      </motion.div>

      {/* Enter the flow indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-cormorant text-sm italic text-foreground/40 tracking-widest">
          Enter the Flow
        </span>
        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold/50"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}