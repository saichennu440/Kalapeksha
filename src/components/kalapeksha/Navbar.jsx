import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', target: 'about' },
  { label: 'Programs', target: 'programs' },
  { label: 'Artists', target: 'artists' },
  { label: 'Events', target: 'events' },
  { label: 'Join', target: 'join' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const LOGO = scrolled
  ? '/Kalapeksha_logo.png'
  : '/Ka_White.png';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
            <img
              src={LOGO}
              alt="Kalāpeksha — In Pursuit of Art"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.slice(0, -1).map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className={`font-inter text-sm font-medium ${scrolled ? 'text-primary/70' : 'text-white'} hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded px-1`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('join')}
              className="font-inter text-sm font-semibold bg-secondary text-white px-5 py-2 rounded-full hover:bg-secondary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Join
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={LOGO} alt="Kalāpeksha" className="h-14 w-auto mb-4" />
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="font-cormorant text-3xl font-light text-primary hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}