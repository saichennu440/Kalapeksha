import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function SoundToggle({ isMuted, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="fixed bottom-8 left-8 z-50 w-12 h-12 rounded-full border border-gold/30 backdrop-blur-xl bg-void/40 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isMuted ? 'Unmute ambient sound' : 'Mute ambient sound'}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-foreground/60" />
      ) : (
        <Volume2 className="w-5 h-5 text-gold" />
      )}
    </motion.button>
  );
}