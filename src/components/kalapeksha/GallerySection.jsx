import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const pieces = [
  {
    title: 'Abyssal Drift',
    batch: 'KLP-2024-017',
    dimensions: '120 × 80 cm',
    materials: 'Deep-pour epoxy, cerulean pigment, 24k gold leaf',
    alt: 'Deep cerulean blue ocean waves with translucent clear resin layers and scattered gold flake particles, extreme macro detail',
  },
  {
    title: 'Solar Collision',
    batch: 'KLP-2024-023',
    dimensions: '90 × 90 cm',
    materials: 'Crystal resin, coral pigment, burnt orange mica, gold vein',
    alt: 'Top-down view of flowing teal and coral orange pigments mixing in clear epoxy with intricate cell patterns and gold leaf',
  },
  {
    title: 'Frozen Nebula',
    batch: 'KLP-2024-031',
    dimensions: '150 × 60 cm',
    materials: 'UV-stable resin, deep teal, amber micro-pigments',
    alt: 'Extreme close-up of cured resin surface with trapped air bubbles, gold leaf veins through teal and amber layers',
  },
];

function GalleryCard({ piece, image, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 2 : -2, index % 2 === 0 ? -1 : 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center mb-32 last:mb-0`}
    >
      {/* Image */}
      <motion.div
        className="relative w-full md:w-1/2 overflow-hidden rounded-sm group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={image}
          alt={piece.alt}
          className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-500 rounded-sm" />
      </motion.div>

      {/* Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <p className="font-mono text-[10px] tracking-[0.5em] text-gold/50 uppercase">
          Batch {piece.batch}
        </p>
        <h3 className="font-cormorant text-4xl md:text-5xl font-light text-foreground">
          {piece.title}
        </h3>
        <div className="h-px w-16 bg-gold/30" />
        <div className="space-y-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Dimensions</p>
            <p className="font-mono text-sm text-foreground/70 mt-1">{piece.dimensions}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Materials</p>
            <p className="font-mono text-sm text-foreground/70 mt-1">{piece.materials}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection({ images }) {
  return (
    <section id="gallery" className="relative py-32 px-6 md:px-16">
      {/* Section header */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-6">
          Phase 02 — The Suspension
        </p>
        <h2 className="font-cormorant text-5xl md:text-7xl font-light text-foreground">
          The Gallery
        </h2>
      </motion.div>

      {/* Gallery pieces */}
      <div className="max-w-6xl mx-auto">
        {pieces.map((piece, i) => (
          <GalleryCard key={piece.batch} piece={piece} image={images[i]} index={i} />
        ))}
      </div>
    </section>
  );
}