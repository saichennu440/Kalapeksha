import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OriginsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [60, 0]);
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.5], ['0%', '100%']);

  return (
    <section ref={ref} id="origins" className="relative min-h-screen flex items-center justify-center py-32 px-6">
      {/* Background gradient shift */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(42,82,190,0.06) 0%, transparent 60%)',
        }}
      />

      <motion.div
        className="max-w-3xl mx-auto text-center relative z-10"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-8">
          Phase 01 — The Pour
        </p>

        <h2 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-10 leading-tight">
          Where Chaos<br />
          <span className="italic text-gold/80">Becomes Art</span>
        </h2>

        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-10"
          style={{ width: lineWidth }}
        />

        <p className="font-cormorant text-xl md:text-2xl text-foreground/70 leading-relaxed font-light">
          Every piece begins as liquid potential — raw pigments meeting crystalline resin
          in a dance of controlled chaos. We don't just create; we orchestrate the moment
          where fluid transforms into forever.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { num: '001', label: 'Pigments Selected' },
            { num: '48h', label: 'Cure Duration' },
            { num: '∞', label: 'Possibilities' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="font-mono text-2xl md:text-3xl text-gold/60">{stat.num}</p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-2 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}