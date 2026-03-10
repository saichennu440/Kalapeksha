import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    type: 'Workshop',
    title: 'Resin Art Fundamentals',
    date: 'April 12, 2026',
    location: 'Bangalore Studio',
    tag: 'Hands-on',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
  },
  {
    type: 'Artist Talk',
    title: 'Craft as Language',
    date: 'April 20, 2026',
    location: 'IIM Bangalore',
    tag: 'Talk',
    color: 'bg-primary/5 text-primary border-primary/15',
  },
  {
    type: 'Art Fair',
    title: 'Kalāpeksha Art Fair 2026',
    date: 'May 3–5, 2026',
    location: 'Cubbon Park, Bangalore',
    tag: 'Exhibition',
    color: 'bg-secondary/10 text-secondary border-secondary/20',
  },
];

export default function EventsSection() {
  return (
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
              <button className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors group focus:outline-none">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}