import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ArtifactSection({ artifactImage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [0.85, 1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center py-32 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          style={{ rotate: imgRotate, scale: imgScale }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={artifactImage}
              alt="Finished resin art piece, a round table top with deep swirling teal and gold patterns, mirror-like glossy surface, museum quality"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 border border-gold/10 rounded-sm" />
          </div>
          {/* Floating label */}
          <motion.div
            className="absolute -bottom-4 -right-4 md:-right-8 bg-void/90 border border-gold/20 px-5 py-3 rounded-sm backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-gold/50 uppercase">Ready for</p>
            <p className="font-mono text-sm text-foreground/80 mt-1">Collection</p>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-8">
            Phase 04 — The Artifact
          </p>

          <h2 className="font-cormorant text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
            Your Vision,<br />
            <span className="italic text-gold/80">Crystallized</span>
          </h2>

          <p className="font-cormorant text-xl text-foreground/70 leading-relaxed font-light mb-10">
            Commission a bespoke piece tailored to your space. From initial concept
            to the final pour, every artifact is a collaboration between your vision
            and our craft.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.2em] text-gold border border-gold/30 px-8 py-4 rounded-sm hover:bg-gold/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold uppercase"
            whileHover={{ x: 5 }}
          >
            Begin Your Commission
            <span className="text-gold/40">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}