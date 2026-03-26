import React from 'react';
import { motion } from 'framer-motion';

const ABOUT_IMG = '/2.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={ABOUT_IMG}
              alt="Artisans collaborating in a vibrant workshop setting"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary/10 rounded-2xl -z-10" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-5">
            Who We Are
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary mb-8 leading-tight">
            About<br />
            <span className="italic">Kalāpeksha</span>
          </h2>
          <div className="h-0.5 w-16 bg-secondary mb-8" />
          <p className="font-inter text-lg text-foreground/70 leading-relaxed mb-6">
            Kalāpeksha is a platform connecting artisans with communities, workplaces,
            and institutions where creativity can thrive.
          </p>
          <p className="font-inter text-base text-foreground/60 leading-relaxed">
            We believe art belongs in everyday spaces — not just in galleries. Through
            workshops, fairs, and collaborations, we create meaningful opportunities
            for artisans to explore, express, and share their creativity with the world.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { num: '200+', label: 'Artisans' },
              { num: '50+', label: 'Programs' },
              { num: '30+', label: 'Institutions' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center py-4 px-3 bg-muted rounded-xl"
              >
                <p className="font-cormorant text-3xl font-semibold text-primary">{stat.num}</p>
                <p className="font-inter text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}