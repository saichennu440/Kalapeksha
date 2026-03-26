import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BG_IMG = '/3.jpeg';

export default function ManifestoSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative py-36 px-6 overflow-hidden">
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img src={BG_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true"  />
        <div className="absolute inset-0  bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-0.5 bg-secondary mx-auto mb-10" />

          <blockquote className="font-cormorant text-3xl md:text-5xl font-light text-white leading-relaxed italic mb-10">
            "Art belongs everywhere —<br className="hidden md:block" />
            not only in galleries but<br className="hidden md:block" />
            in everyday spaces."
          </blockquote>

          <div className="w-12 h-0.5 bg-secondary mx-auto mb-10" />

          <p className="font-inter text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Kalāpeksha creates opportunities where artisans can explore, express,
            and share their creativity — with communities that need it most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}