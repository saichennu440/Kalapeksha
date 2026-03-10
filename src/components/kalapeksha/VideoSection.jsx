import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, X } from 'lucide-react';

// Placeholder video thumbnails (replace src with actual video files later)
const videos = [
  {
    id: 1,
    title: 'The Grand Pour',
    subtitle: 'Expo 2024 — Chennai',
    batch: 'VID-001',
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/4ff5b5781_generated_image.png',
    // Replace with actual video URL: src: 'your-video-url.mp4'
    src: null,
    duration: '2:34',
  },
  {
    id: 2,
    title: 'Pigment Bloom',
    subtitle: 'Studio Session',
    batch: 'VID-002',
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/0060d9976_generated_image.png',
    src: null,
    duration: '1:48',
  },
  {
    id: 3,
    title: 'Expo Highlights',
    subtitle: 'Exhibition Reel 2024',
    batch: 'VID-003',
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/af9cd279b_generated_image.png',
    src: null,
    duration: '3:12',
  },
];

function VideoCard({ video, index, onPlay }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.7 }}
      viewport={{ once: true }}
      onClick={() => onPlay(video)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-sm aspect-video">
        <img
          src={video.thumbnail}
          alt={`${video.title} - ${video.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-void/40 group-hover:bg-void/20 transition-all duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full border border-gold/60 bg-void/60 backdrop-blur-sm flex items-center justify-center"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 text-gold fill-gold ml-1" />
          </motion.div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-void/80 backdrop-blur-sm px-2 py-1 rounded-sm">
          <span className="font-mono text-[10px] text-foreground/70 tracking-widest">{video.duration}</span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p className="font-mono text-[10px] tracking-[0.4em] text-gold/50 uppercase">{video.batch}</p>
        <h4 className="font-cormorant text-2xl font-light text-foreground group-hover:text-gold/90 transition-colors duration-300">
          {video.title}
        </h4>
        <p className="font-mono text-xs text-muted-foreground">{video.subtitle}</p>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void/95 backdrop-blur-xl px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-foreground/60 hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        {video.src ? (
          <video
            src={video.src}
            controls
            autoPlay
            className="w-full rounded-sm border border-gold/10"
          />
        ) : (
          <div className="relative aspect-video rounded-sm overflow-hidden border border-gold/10">
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center">
                <Play className="w-6 h-6 text-gold/60 fill-gold/40 ml-1" />
              </div>
              <p className="font-mono text-xs text-muted-foreground tracking-widest">
                Replace with your video file
              </p>
              <p className="font-mono text-[10px] text-gold/40 tracking-widest uppercase">
                {video.batch}
              </p>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="font-cormorant text-3xl font-light text-foreground">{video.title}</h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">{video.subtitle}</p>
          </div>
          <p className="font-mono text-xs text-gold/50 tracking-widest">{video.duration}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="films" className="relative py-32 px-6 md:px-16">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-xs tracking-[0.4em] text-gold/70 uppercase mb-6">In Motion</p>
        <h2 className="font-cormorant text-5xl md:text-7xl font-light text-foreground">
          Expo & Studio<br />
          <span className="italic text-gold/80">Films</span>
        </h2>
        <p className="font-cormorant text-xl text-foreground/50 mt-6 font-light">
          Watch the alchemy unfold in real time.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {videos.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i} onPlay={setActiveVideo} />
        ))}
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  );
}