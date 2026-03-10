import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Origins', target: 'origins' },
  { label: 'The Gallery', target: 'gallery' },
  { label: 'Bespoke', target: 'bespoke' },
  { label: 'Films', target: 'films' },
  { label: 'Artisans', target: 'artisans' },
  { label: 'Contact', target: 'contact' },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full border border-gold/30 backdrop-blur-xl bg-void/40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation menu"
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-gold/70"
          animate={{
            scale: isOpen ? [1, 1.5, 1] : [1, 1.2, 1],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, borderRadius: '50%' }}
            animate={{ opacity: 1, scale: 1, borderRadius: '24px' }}
            exit={{ opacity: 0, scale: 0.5, borderRadius: '50%' }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-20 right-0 w-56 backdrop-blur-2xl bg-void/80 border border-gold/20 p-6 overflow-hidden"
            style={{ borderRadius: '24px' }}
          >
            {/* Chromatic aberration edge effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow: 'inset 0 0 30px rgba(42,82,190,0.1), inset 0 0 60px rgba(255,127,80,0.05)'
              }}
            />
            <nav className="relative z-10 flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(item.target)}
                  className="text-left font-cormorant text-xl text-foreground/80 hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold rounded px-2 py-1"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}