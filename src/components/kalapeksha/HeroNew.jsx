import React from 'react';
import { motion } from 'framer-motion';

const BG_IMG = '/1.mp4';

export default function HeroNew() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={BG_IMG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            In Pursuit of Art
          </motion.p>

          <h1 className="font-cormorant font-light text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
            KALĀPEKSHA
          </h1>

          <div className="space-y-2 mb-10">
            {[
              'Art deserves more spaces.',
              'Artisans deserve more opportunities.',
              'Kalāpeksha brings them together.',
            ].map((line, i) => (
              <motion.p
                key={i}
                className="font-cormorant text-xl md:text-2xl text-white/80 italic font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <button
              onClick={() => scrollTo('join')}
              className="font-inter font-semibold text-sm bg-secondary text-white px-7 py-3.5 rounded-full hover:bg-secondary/90 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
            >
              Register as an Artisan
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="font-inter font-medium text-sm border-2 border-white/50 text-white px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Explore Programs
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative right side */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* <div className="relative">
            <div className="w-80 h-80 rounded-full border border-white/10 absolute -top-8 -right-8" />
            <div className="w-64 h-64 rounded-full border border-secondary/20 absolute top-4 right-4" />
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white/20 mx-auto">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={BG_IMG} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}