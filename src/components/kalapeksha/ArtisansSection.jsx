import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const artisans = [
  {
    name: 'Lead Artist',
    role: 'Founder & Principal Alchemist',
    specialty: 'Ocean & Deep Pour Resin',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/55056d5cc_generated_image.png',
    alt: 'Resin artist pouring vibrant teal pigment into clear epoxy resin, dramatic studio lighting, focused and masterful',
    quote: '"Every pour is a conversation between order and chaos."',
    tag: 'KLP-ARTIST-001',
  },
  {
    name: 'Studio Artist',
    role: 'Color Specialist',
    specialty: 'Pigment & Mica Blending',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/af9cd279b_generated_image.png',
    alt: 'Male resin artist spreading coral orange and deep blue epoxy resin with precision, close up hands showing mastery',
    quote: '"The pigment finds its own path. We only guide it."',
    tag: 'KLP-ARTIST-002',
  },
  {
    name: 'Studio Team',
    role: 'Collaborative Works',
    specialty: 'Large-Scale Installations',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/00dceb10d_generated_image.png',
    alt: 'Two resin artists collaborating on a large table resin pour, top down view, teal and gold swirling patterns',
    quote: '"Scale amplifies everything — the beauty and the risk."',
    tag: 'KLP-ARTIST-003',
  },
];

function ArtisanCard({ artisan, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : 80, index % 2 === 0 ? -50 : -30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
        <img
          src={artisan.image}
          alt={artisan.alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />

        {/* Quote overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-void/80 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <p className="font-cormorant text-xl italic text-foreground/90 text-center leading-relaxed">
            {artisan.quote}
          </p>
        </motion.div>

        {/* Tag */}
        <div className="absolute top-4 left-4 bg-void/70 backdrop-blur-sm px-3 py-1 rounded-sm">
          <span className="font-mono text-[9px] text-gold/50 tracking-widest">{artisan.tag}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 space-y-2">
        <div className="h-px w-8 bg-gold/30" />
        <h4 className="font-cormorant text-2xl font-light text-foreground">{artisan.name}</h4>
        <p className="font-mono text-[10px] tracking-[0.3em] text-gold/60 uppercase">{artisan.role}</p>
        <p className="font-mono text-xs text-muted-foreground">{artisan.specialty}</p>
      </div>
    </motion.div>
  );
}

export default function ArtisansSection() {
  return (
    <section id="artisans" className="relative py-32 px-6 md:px-16 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <motion.div
        className="text-center mb-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-6">The Hands Behind</p>
        <h2 className="font-cormorant text-5xl md:text-7xl font-light text-foreground">
          Meet the<br />
          <span className="italic text-gold/80">Artisans</span>
        </h2>
        <p className="font-cormorant text-xl text-foreground/50 mt-6 font-light max-w-xl mx-auto">
          Crafted by human hands, guided by years of mastery in the alchemy of resin.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
        {artisans.map((artisan, i) => (
          <ArtisanCard key={artisan.tag} artisan={artisan} index={i} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        className="text-center font-mono text-xs text-muted-foreground/40 tracking-widest mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        * Hover to reveal their philosophy · Replace images with your own team photos
      </motion.p>
    </section>
  );
}