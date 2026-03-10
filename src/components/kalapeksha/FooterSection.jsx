import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FooterSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const resinFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const resinOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.15]);

  return (
    <footer ref={ref} id="contact" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Resin fill effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: resinFill,
          opacity: resinOpacity,
          background: 'linear-gradient(to top, rgba(212,175,55,0.15), rgba(42,82,190,0.08), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 pb-16">
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-24" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left - Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.5em] text-gold/50 uppercase mb-8">
              Contact
            </p>
            <h3 className="font-cormorant text-4xl md:text-5xl font-light text-foreground mb-8">
              Let's Create<br />
              <span className="italic text-gold/80">Together</span>
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@kalapeksha.com"
                className="block font-mono text-lg text-foreground/80 hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold rounded"
              >
                hello@kalapeksha.com
              </a>
              <p className="font-mono text-sm text-muted-foreground">
                India — Worldwide Shipping
              </p>
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-10">
            <div>
              <p className="font-mono text-[10px] tracking-[0.5em] text-gold/50 uppercase mb-4">
                Studio Hours
              </p>
              <p className="font-mono text-sm text-foreground/60">
                Mon — Fri : 10:00 — 18:00 IST<br />
                By Appointment Only
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.5em] text-gold/50 uppercase mb-4">
                Follow
              </p>
              <div className="flex gap-6">
                {['Instagram', 'Pinterest', 'Behance'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="font-mono text-sm text-foreground/60 hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold rounded"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-cormorant text-2xl tracking-[0.2em] text-foreground/30">
            KALAPEKSHA
          </p>
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">
            © 2024 — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}