import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CureSection({ cureImage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [1.1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section ref={ref} id="bespoke" className="relative min-h-screen py-32 overflow-hidden">
      {/* Full-width cure image */}
      <motion.div className="relative w-full h-[70vh] overflow-hidden" style={{ scale: imgScale }}>
        <img
          src={cureImage}
          alt="Low angle dramatic shot of a thick resin art slab showing multiple translucent colored layers with a luminous back-lit glow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-transparent" />
      </motion.div>

      {/* Content overlay */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 -mt-48"
        style={{ opacity: textOpacity }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-8">
          Phase 03 — The Cure
        </p>

        <h2 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-10 leading-tight">
          Precision in<br />
          <span className="italic text-gold/80">Every Layer</span>
        </h2>

        <p className="font-cormorant text-xl md:text-2xl text-foreground/70 leading-relaxed font-light max-w-2xl">
          The cure is where patience becomes permanence. Over 48 hours, liquid chaos
          crystallizes into glass-like perfection. Each micro-bubble is accounted for,
          each gold vein finds its final path.
        </p>

        {/* Technical specs */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Cure Temp', value: '24°C' },
            { label: 'Hardness', value: '85 Shore D' },
            { label: 'UV Stability', value: '99.7%' },
            { label: 'Clarity', value: 'Optical' },
          ].map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="border border-border/50 p-4 rounded-sm"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {spec.label}
              </p>
              <p className="font-mono text-lg text-gold/70 mt-2">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}