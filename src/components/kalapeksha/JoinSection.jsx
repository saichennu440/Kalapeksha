import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function JoinSection() {
  const [form, setForm] = useState({ name: '', email: '', artForm: '', about: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="join" className="py-24 md:py-32 px-6 bg-muted flex items-center justify-center min-h-[50vh]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h3 className="font-cormorant text-4xl font-light text-primary mb-3">Thank You!</h3>
          <p className="font-inter text-base text-muted-foreground">We'll be in touch soon. Welcome to Kalāpeksha.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="join" className="relative py-24 md:py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.4em] text-secondary uppercase mb-5">Get Started</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-primary mb-6 leading-tight">
            Join the<br /><span className="italic">Platform</span>
          </h2>
          <div className="h-0.5 w-16 bg-secondary mb-8" />
          <p className="font-inter text-lg text-foreground/70 leading-relaxed mb-6">
            Are you an artisan looking for new spaces to share your work? Kalāpeksha
            is built for you. Register today and become part of a growing creative community.
          </p>
          <ul className="space-y-3">
            {[
              'Access workshops and art fairs',
              'Collaborate with institutions',
              'Connect with a curated audience',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-inter text-sm text-foreground/60">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-5 border border-border">
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              { id: 'artForm', label: 'Art Form', type: 'text', placeholder: 'e.g. Resin Art, Pottery, Weaving' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block font-inter text-sm font-medium text-foreground/70 mb-1.5">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id]}
                  onChange={e => setForm({ ...form, [field.id]: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-sm font-inter text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition"
                />
              </div>
            ))}
            <div>
              <label htmlFor="about" className="block font-inter text-sm font-medium text-foreground/70 mb-1.5">
                About Your Work
              </label>
              <textarea
                id="about"
                rows={4}
                placeholder="Tell us about yourself and your art..."
                value={form.about}
                onChange={e => setForm({ ...form, about: e.target.value })}
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-sm font-inter text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-inter font-semibold text-sm py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Register
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}