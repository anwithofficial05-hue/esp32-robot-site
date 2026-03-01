"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center cyber-grid-bg overflow-hidden"
    >
      {/* Radial glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(0,245,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(124,58,237,0.06)_0%,transparent_70%)]" />
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Text side */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-orbitron text-xs tracking-[0.3em] text-[#00f5ff] mb-4 border border-[#00f5ff]/30 px-3 py-1 rounded-full bg-[#00f5ff]/5">
              ESP32 • OLED • WiFi • BT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6"
          >
            ESP32 Robot
            <br />
            <span className="text-[#00f5ff] neon-text">With Emotions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-poppins text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
          >
            A handcrafted robot companion powered by ESP32 with expressive OLED
            eyes, WiFi &amp; Bluetooth connectivity, and touch interaction.
            Designed for makers, builders, and dreamers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#viewer"
              className="btn-shine font-orbitron text-sm font-semibold px-8 py-4 rounded-xl border border-[#00f5ff] text-[#00f5ff] tracking-widest hover:bg-[#00f5ff]/10 transition-all neon-border-hover"
            >
              VIEW IN 3D
            </a>
            <a
              href="#product"
              className="btn-shine font-orbitron text-sm font-semibold px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f5ff] to-[#0066ff] text-[#020818] tracking-widest hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)]"
            >
              BUY / PRE-ORDER
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "240MHz", label: "CPU Speed" },
              { value: "5+", label: "Emotions" },
              { value: "WiFi+BT", label: "Wireless" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-orbitron text-2xl font-bold text-[#00f5ff]">
                  {s.value}
                </div>
                <div className="font-poppins text-xs text-slate-500 tracking-widest uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Robot images side */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Background glow circle */}
          <div className="absolute w-80 h-80 rounded-full bg-[radial-gradient(ellipse,rgba(0,245,255,0.12)_0%,transparent_70%)] animate-pulse-slow" />

          {/* Red robot - main, floating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative z-20 animate-float"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/images/robot-red.png"
                alt="EMOTI-BOT Red Edition"
                fill
                className="object-contain drop-shadow-[0_0_40px_rgba(239,68,68,0.4)]"
                priority
              />
            </div>
          </motion.div>

          {/* White robot - secondary, positioned behind/side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -right-4 bottom-0 z-10"
            style={{ animationDelay: "2s" }}
          >
            <div
              className="relative w-32 h-32 sm:w-40 sm:h-40 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/images/robot-white.png"
                alt="EMOTI-BOT White Edition"
                fill
                className="object-contain opacity-80 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              />
            </div>
          </motion.div>

          {/* Floating label chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="absolute top-4 left-0 glass px-3 py-2 rounded-xl text-xs font-orbitron text-[#00f5ff]"
          >
            🔴 RED EDITION
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-4 right-0 glass px-3 py-2 rounded-xl text-xs font-orbitron text-slate-300"
          >
            ⚪ WHITE EDITION
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="font-orbitron text-xs tracking-widest">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce text-[#00f5ff]" />
      </motion.div>
    </section>
  );
}
