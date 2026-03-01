"use client";

import { Zap, Twitter, Github, Mail, BookOpen, LifeBuoy } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(0,245,255,0.03)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#0066ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.5)]">
                <Zap size={16} className="text-[#020818]" fill="currentColor" />
              </div>
              <span className="font-orbitron font-bold text-lg text-white tracking-widest">
                EMOTI<span className="text-[#00f5ff]">-BOT</span>
              </span>
            </div>
            <p className="font-poppins text-slate-500 text-sm leading-relaxed max-w-sm">
              An ESP32-powered expressive robot for makers, educators, and anyone
              who believes machines should have personality.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "mailto:hello@emotibot.dev", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h5 className="font-orbitron text-xs text-slate-500 tracking-[0.2em] uppercase mb-4">
              Resources
            </h5>
            <ul className="space-y-3">
              {[
                { icon: BookOpen, label: "Documentation", href: "#" },
                { icon: LifeBuoy, label: "Support", href: "#" },
                { icon: Github, label: "GitHub Repo", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-2 font-poppins text-sm text-slate-400 hover:text-[#00f5ff] transition-colors"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-orbitron text-xs text-slate-500 tracking-[0.2em] uppercase mb-4">
              Company
            </h5>
            <ul className="space-y-3">
              {["About", "Contact", "Privacy Policy", "Terms"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-poppins text-sm text-slate-400 hover:text-[#00f5ff] transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-line mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-poppins text-xs text-slate-600">
            © 2025 EMOTI-BOT. All rights reserved.
          </p>
          <p className="font-orbitron text-xs text-slate-700 tracking-widest">
            MADE WITH ♥ FOR MAKERS
          </p>
        </div>
      </div>
    </footer>
  );
}
