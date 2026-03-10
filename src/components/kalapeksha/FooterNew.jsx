import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const LOGO = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b01a073f70d4aa265ff14f/380c1e57f_Kalapeksha_logo.png';

export default function FooterNew() {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <img src={LOGO} alt="Kalāpeksha" className="h-10 w-auto object-contain brightness-0 invert mb-4" />
            <p className="font-cormorant text-lg italic text-white/60">In Pursuit of Art</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase mb-5">Navigate</p>
            <ul className="space-y-3">
              {['About', 'Programs', 'Artists', 'Events', 'Gallery', 'Join'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-inter text-sm text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase mb-5">Connect</p>
            <div className="space-y-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-inter text-sm text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              >
                <Instagram className="w-4 h-4 text-secondary" />
                @kalapeksha
              </a>
              <a
                href="mailto:hello@kalapeksha.in"
                className="flex items-center gap-3 font-inter text-sm text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-secondary rounded"
              >
                <Mail className="w-4 h-4 text-secondary" />
                hello@kalapeksha.in
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-inter text-xs text-white/50 mb-3">Subscribe to our newsletter</p>
              <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm font-inter text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-secondary min-w-0"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white font-inter text-xs font-semibold px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-mono text-xs text-white/30 tracking-widest">
            © Kalāpeksha · In Pursuit of Art
          </p>
        </div>
      </div>
    </footer>
  );
}