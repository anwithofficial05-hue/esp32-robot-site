"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { label: "View in 3D", href: "#viewer" },
  { label: "Features", href: "#features" },
  { label: "Emotions", href: "#emotions" },
  { label: "Buy", href: "#product" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#0066ff] flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.5)] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.8)] transition-all">
              <Zap size={16} className="text-[#020818]" fill="currentColor" />
            </div>
            <span className="font-orbitron font-bold text-lg tracking-widest text-white neon-text">
              EMOTI<span className="text-[#00f5ff]">-BOT</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-poppins text-sm text-slate-300 hover:text-[#00f5ff] transition-colors duration-200 tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00f5ff] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#product"
              className="btn-shine font-orbitron text-xs font-semibold px-5 py-2.5 rounded-lg bg-[#00f5ff] text-[#020818] tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.7)]"
            >
              PRE-ORDER
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#00f5ff]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-orbitron text-xl text-white hover:text-[#00f5ff] transition-colors tracking-widest"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#product"
              onClick={() => setMenuOpen(false)}
              className="btn-shine font-orbitron text-sm font-semibold px-8 py-3 rounded-lg bg-[#00f5ff] text-[#020818] tracking-widest"
            >
              PRE-ORDER NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
