import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/f62433e00_generated_image.png',
    alt: 'Artisan workshop session with participants learning traditional craft techniques',
    label: 'Workshop',
  },
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/29721deeb_generated_image.png',
    alt: 'Colorful traditional Indian textile artwork with intricate block print patterns',
    label: 'Artwork',
  },
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/f0f076343_generated_image.png',
    alt: 'Indian folk art exhibition with colorful handmade artworks on display',
    label: 'Exhibition',
  },
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/a2dba523e_generated_image.png',
    alt: 'Close up of artisan hands doing intricate embroidery with colorful threads',
    label: 'Artisan at Work',
  },
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/1799315bb_generated_image.png',
    alt: 'Indian art fair event with colorful stalls and festive atmosphere',
    label: 'Art Fair',
  },
  {
    src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/c50295ccb_generated_image.png',
    alt: 'Traditional Indian art workshop with group of artisans working together',
    label: 'Community',
  },
];

export default function GalleryNew() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-4">Visual Story</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <span className="font-inter text-sm font-medium text-white">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white focus:outline-none"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selected.src} alt={selected.alt} className="w-full rounded-xl" />
              <p className="font-inter text-sm text-white/60 mt-3 text-center">{selected.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}