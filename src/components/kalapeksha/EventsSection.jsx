import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, X, Clock, Users, Ticket, ExternalLink } from 'lucide-react';

const events = [
  {
    type: 'Workshop',
    title: 'Resin Art Fundamentals',
    date: 'To be announced',
    location: 'Bangalore Studio',
    tag: 'Hands-on',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
    accentColor: 'bg-secondary/10',
    details: {
      description:
        'Dive deep into the world of resin art in this immersive full-day workshop. Learn to mix, pour, and manipulate epoxy resin to create one-of-a-kind art pieces — from petri art and geode effects to fluid abstract compositions. All materials are included.',
      duration: '6 hours (10 AM – 4 PM)',
      capacity: '12 participants',
      price: '₹3,500 per person',
      instructor: 'Meera Nair',
      highlights: [
        'Introduction to resin types and safety',
        'Colour mixing & pigment techniques',
        'Hands-on pour & tilt techniques',
        'Take home your finished piece',
      ],
      registerLink: '#',
    },
  },
  {
    type: 'Art Fair',
    title: 'Kalāpeksha Art Fair 2026',
    date: 'To be announced',
    location: 'ICP 800 Jubilee Hills, Hyderabad',
    tag: 'Exhibition',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
    accentColor: 'bg-secondary/10',
    details: {
      description:
        'Kalāpeksha returns for its sixth edition, bringing together over 80 emerging and established artists across painting, sculpture, textile, and digital art. Three days of curated exhibitions, artist-led tours, interactive installations, and live art performances across four galleries.',
      duration: '3 days, 10 AM – 8 PM daily',
      capacity: 'Open to public',
      price: '₹200 single day / ₹500 full pass',
      instructor: 'Curated by Anjali Reddy',
      highlights: [
        '80+ artists across four gallery halls',
        'Live mural & performance art',
        'Artist-led guided tours daily at noon',
        'Artisan market & collectors preview',
      ],
      registerLink: '#join',
    },
  },
    {
    type: 'Concert',
    title: 'Telugu Jamming Concert',
    date: '2nd MAY 2026',
    location: 'Lunar Cafe, Rd No. 5, Jubilee Hills, Hyderabad',
    tag: 'Concert',
    color: 'bg-primary/5 text-primary border-primary/15',
    accentColor: 'bg-primary/5',
    details: {
      description:
        'Experience an unforgettable evening of soulful Telugu music with our talented vocalist and composer. Accompanied by a live band, our team will perform a blend of traditional and contemporary Telugu songs, showcasing the rich musical heritage of the region. Join us for an intimate night of melodies, rhythms, and cultural celebration.',
      duration: '2 hours (4:30 PM – 6:30 PM)',
      capacity: 'Open seating, 200+',
      price: 'registration required',
      instructor: 'Vema',
      highlights: [
        'Live performance of Telugu songs',
        'Blend of traditional and contemporary music',
        'Intimate setting with live band accompaniment',
        'Celebrate Telugu musical heritage',
      ],
      registerLink: './join',
    },
  },
];

function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal card */}
        <motion.div
          className="relative z-10 bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        >
          {/* Header accent strip */}
          <div className={`${event.accentColor} px-7 pt-7 pb-5`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`inline-block text-xs font-mono font-medium px-3 py-1 rounded-full border ${event.color} mb-3`}>
                  {event.tag}
                </span>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1">{event.type}</p>
                <h3 className="font-cormorant text-2xl md:text-3xl font-semibold text-primary leading-tight">{event.title}</h3>
              </div>
              <button
                onClick={onClose}
                className="mt-1 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-primary/60 hover:text-primary hover:bg-white transition-colors focus:outline-none"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick meta */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
              <div className="flex items-center gap-1.5 text-sm text-foreground/60">
                <Calendar className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-inter">{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-foreground/60">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-inter">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-7 py-6 space-y-5">
            <p className="font-inter text-sm text-foreground/70 leading-relaxed">
              {event.details.description}
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock, label: 'Duration', value: event.details.duration },
                { icon: Users, label: 'Capacity', value: event.details.capacity },
                { icon: Ticket, label: 'Entry', value: event.details.price },
                { icon: null, label: 'Led by', value: event.details.instructor },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-muted/30 rounded-xl p-3.5 border border-border">
                  <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase mb-1">{label}</p>
                  <p className="font-inter text-xs font-medium text-primary leading-snug">{value}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div>
              <p className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase mb-3">What to expect</p>
              <ul className="space-y-2">
                {event.details.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/70 font-inter">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={event.details.registerLink}
              className="flex items-center justify-center gap-2 w-full mt-1 py-3 rounded-xl bg-primary text-white text-sm font-medium font-inter hover:bg-primary/90 transition-colors focus:outline-none"
            >
              Register now <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section id="events" className="relative py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-4">What's On</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">
              Upcoming <span className="italic">Events</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-border rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <span className={`inline-block text-xs font-mono font-medium px-3 py-1 rounded-full border ${ev.color} mb-5`}>
                  {ev.tag}
                </span>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-2">{ev.type}</p>
                <h3 className="font-cormorant text-2xl font-semibold text-primary mb-5">{ev.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Calendar className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-inter">{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin className="w-4 h-4 text-secondary shrink-0" />
                    <span className="font-inter">{ev.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEvent(ev)}
                  className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors group focus:outline-none"
                >
                  Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </>
  );
}