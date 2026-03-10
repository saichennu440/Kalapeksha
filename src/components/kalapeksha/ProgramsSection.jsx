import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, MessageSquare, Building2 } from 'lucide-react';

const programs = [
  {
    icon: Users,
    title: 'Workshops',
    description: 'Hands-on sessions led by artisans in an intimate, immersive setting.',
    color: 'bg-primary/5 text-primary',
    border: 'border-primary/10 hover:border-primary/30',
  },
  {
    icon: Star,
    title: 'Art Fairs',
    description: 'Curated platforms to showcase creations and connect with collectors.',
    color: 'bg-secondary/10 text-secondary',
    border: 'border-secondary/10 hover:border-secondary/30',
  },
  {
    icon: MessageSquare,
    title: 'Expert Talks',
    description: 'Conversations with creative practitioners sharing lived experience.',
    color: 'bg-primary/5 text-primary',
    border: 'border-primary/10 hover:border-primary/30',
  },
  {
    icon: Building2,
    title: 'Institutional Collaborations',
    description: 'Art experiences curated for workplaces and campuses.',
    color: 'bg-secondary/10 text-secondary',
    border: 'border-secondary/10 hover:border-secondary/30',
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative py-24 md:py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-4">What We Do</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary">Programs</h2>
          <p className="font-inter text-base text-muted-foreground mt-4 max-w-xl mx-auto">
            Diverse initiatives that create space for art to grow and be shared.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-8 border ${prog.border} transition-all duration-300 group cursor-default shadow-sm hover:shadow-md`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${prog.color} mb-6`}>
                <prog.icon className="w-5 h-5" />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-primary mb-3">{prog.title}</h3>
              <p className="font-inter text-base text-foreground/60 leading-relaxed">{prog.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}