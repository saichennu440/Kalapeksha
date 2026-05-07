import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// ─── ADD YOUR EVENTS HERE ────────────────────────────────────────────────────
// type: "image" or "video"

const events = [
  
  {
    id: 1,
    title: 'Resin Art Workshop',
    date: 'Friday, 27th Feb 2026',
    cover: '/gallery/resin-main/resin-main.jpeg',
    label: 'Workshop',

    media: [
      {
        type: 'image',
        src: '/gallery/resin-main/resin-main.jpeg',
        caption: 'Event Poster',
      },
      {
        type: 'image',
        src: '/gallery/resin-main/2.png',
        caption: 'Workshop in progress',
      },
      {
        type: 'image',
        src: '/gallery/resin-main/8.png',
        caption: 'Participants at work',
      },
      {
        type: 'image',
        src: '/gallery/resin-main/4.png',
        caption: 'Finished artworks',
      },
      {
        type: 'image',
        src: '/gallery/resin-main/5.png',
        caption: 'Group photo',
      },
      {
        type: 'image',
        src: '/gallery/resin-main/6.png',
        caption: 'Close-up of resin art',
      },
    ],
  },

  {
    id: 2,
    title: 'Telugu Jamming Concert',
    date: 'Saturday, 2nd May 2026',
    cover: '/gallery/lunar-cafe/invitation.jpg',
    label: 'Live Music',

    media: [
      {
        type: 'video',
        src: '/gallery/lunar-cafe/video1.mp4',
        caption: 'Event Poster',
      },
      {
        type: 'video',
        src: '/gallery/lunar-cafe/video2.mp4',
        caption: 'Live Concert',
      },
      {
        type: 'video',
        src: '/gallery/lunar-cafe/video3.mp4',
        caption: 'Performance',
      },
      {
        type: 'image',
        src: '/gallery/lunar-cafe/img1.jpeg',
        caption: 'Audience enjoying',
      },
      {
        type: 'image',
        src: '/gallery/lunar-cafe/img2.jpeg',
        caption: 'Band jamming',
      },
      {
        type: 'video',
        src: '/gallery/lunar-cafe/video4.mp4',
        caption: 'Behind the Scenes',
      },
      {
        type: 'image',
        src: '/gallery/lunar-cafe/img3.jpeg',
        caption: 'Close-up of instruments',
      },
      {
        type: 'video',
        src: '/gallery/lunar-cafe/video5.mp4',
        caption: 'Crowd cheering',
      },
    ],
  },
  {
    id: 3,
    title: 'Telugu Jamming Concert',
    date: 'Saturday, 9th May 2026',
    cover: '/gallery/triobistro-cafe/triobistro-invitation.jpeg',
    label: 'Upcoming',
    media: [
      {
        type: 'video',
        src: '/gallery/triobistro-cafe/video1.mp4',
        caption: 'Event Poster',
      },
      {
        type: 'video',
        src: '/gallery/triobistro-cafe/video2.mp4',
        caption: 'Live Concert',
      },
      {
        type: 'video',
        src: '/gallery/triobistro-cafe/video3.mp4',
        caption: 'Performance',
      },
      {
        type: 'image',
        src: '/gallery/triobistro-cafe/img1.jpeg',
        caption: 'Audience enjoying',
      },
      {
        type: 'image',
        src: '/gallery/triobistro-cafe/img2.jpeg',
        caption: 'Band jamming',
      },
      {
        type: 'video',
        src: '/gallery/triobistro-cafe/video4.mp4',
        caption: 'Behind the Scenes',
      },
      {
        type: 'image',
        src: '/gallery/triobistro-cafe/img3.jpeg',
        caption: 'Close-up of instruments',
      },
      {
        type: 'video',
        src: '/gallery/triobistro-cafe/video5.mp4',
        caption: 'Crowd cheering',
      },
    ],
  }, 
];

export default function GalleryNew() {
  const [activeEvent, setActiveEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragStartX = useRef(null);

  const openEvent = (event) => {
    setActiveEvent(event);
    setCurrentIndex(0);
  };

  const closeEvent = () => {
    setActiveEvent(null);
    setCurrentIndex(0);
  };

  const prev = () => {
    if (!activeEvent) return;

    setCurrentIndex((i) =>
      i === 0 ? activeEvent.media.length - 1 : i - 1
    );
  };

  const next = () => {
    if (!activeEvent) return;

    setCurrentIndex((i) =>
      i === activeEvent.media.length - 1 ? 0 : i + 1
    );
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeEvent();
  };

  const onTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (dragStartX.current === null) return;

    const delta =
      e.changedTouches[0].clientX - dragStartX.current;

    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }

    dragStartX.current = null;
  };

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-6 bg-muted"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-4">
            Visual Story
          </p>

          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">
            Gallery
          </h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              onClick={() => openEvent(event)}
            >
              {/* Cover */}
              <img
                src={event.cover}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">

                <span className="font-inter text-sm font-semibold text-white">
                  {event.title}
                </span>

                <span className="font-inter text-xs text-white/70 mt-1">
                  {event.date}
                </span>

                <span className="font-mono text-[10px] tracking-widest text-white/50 mt-2 uppercase">
                  Tap to view gallery
                </span>
              </div>

              {/* Count Badge */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded-full">
                {event.media.length} media
              </div>

              {/* Video Badge */}
            {/* Top Labels */}
<div className="absolute top-3 left-3 flex items-center gap-2">

  {/* Custom Label */}
  {event.label && (
    <div className="bg-white text-black text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
      {event.label}
    </div>
  )}

  {/* Video Icon */}
  {event.media.some((m) => m.type === 'video') && (
    <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full">
      <Play className="w-3 h-3 fill-white" />
    </div>
  )}
</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEvent}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            <motion.div
              className="relative w-full max-w-4xl flex flex-col items-center px-4"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 22,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Header */}
              <div className="w-full flex items-center justify-between mb-4 px-1">
                <div>
                  <p className="text-white font-inter font-semibold text-base">
                    {activeEvent.title}
                  </p>

                  <p className="text-white/50 text-xs font-mono mt-0.5">
                    {activeEvent.date}
                  </p>
                </div>

                <button
                  onClick={closeEvent}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* MEDIA */}
              <div
                className="relative w-full"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">

                  {activeEvent.media[currentIndex].type === 'image' ? (
                    <motion.img
                      key={currentIndex}
                      src={activeEvent.media[currentIndex].src}
                      alt={activeEvent.media[currentIndex].caption}
                      className="w-full max-h-[75vh] object-contain rounded-2xl"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.25 }}
                      draggable={false}
                    />
                  ) : (
                    <motion.video
                      key={currentIndex}
                      src={activeEvent.media[currentIndex].src}
                      className="w-full max-h-[75vh] object-contain rounded-2xl"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.25 }}
                      autoPlay
                      
                      loop
                      controls
                      playsInline
                    />
                  )}

                </AnimatePresence>

                {/* Prev */}
                {activeEvent.media.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <p className="text-white/50 text-sm font-inter mt-3 text-center">
                {activeEvent.media[currentIndex].caption}
              </p>

              {/* Dots */}
              {activeEvent.media.length > 1 && (
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  {activeEvent.media.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-5 h-2 bg-white rounded-full'
                          : 'w-2 h-2 bg-white/30 rounded-full'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Counter */}
              <p className="text-white/30 text-xs font-mono mt-3">
                {currentIndex + 1} / {activeEvent.media.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}