import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const artists = [
  {
    name: 'Dr. Shilpa Kotla',
    artForm: 'Resin & Mixed Media',
    image: '/shilpa.jpeg',
    alt: 'Portrait of female Indian artist holding her colorful handmade painting',
  },
  {
    name: 'Srija',
    artForm: 'Singer & Guitarist',
    image: '/srija.jpeg',
    alt: 'Portrait of male Indian artisan holding traditional craft work',
  },
  // {
  //   name: 'Kamala Devi',
  //   artForm: 'Handloom & Textile',
  //   image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/c180bfc16_generated_image.png',
  //   alt: 'Portrait of senior Indian female artisan with traditional handloom textile',
  // },
];

export default function ArtistsSection() {
  return (
    <section id="artists" className="relative py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-4">Our Community</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">
              Featured <span className="italic">Artisans</span>
            </h2>
          </div>
          {/* <button className="inline-flex items-center gap-2 font-inter text-sm font-medium text-primary hover:text-secondary transition-colors group focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1">
            View All Artisans
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
                <img
                  src={artist.image}
                  alt={artist.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="h-0.5 w-8 bg-secondary mb-3" />
              <h3 className="font-cormorant text-2xl font-semibold text-primary">{artist.name}</h3>
              <p className="font-inter text-sm text-muted-foreground mt-1">{artist.artForm}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}