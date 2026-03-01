"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Wifi, Hand, Palette, Brain } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "ESP32 Powered",
    desc: "Dual-core 240MHz Xtensa LX6 processor with 520KB SRAM. Enough power for real-time animation, sensors, and wireless.",
    accent: "#00f5ff",
  },
  {
    icon: Eye,
    title: "OLED Emotion Display",
    desc: "High-contrast OLED screen renders expressive animated eyes with pixel-perfect emotion sequences.",
    accent: "#0066ff",
  },
  {
    icon: Wifi,
    title: "WiFi + Bluetooth",
    desc: "802.11 b/g/n WiFi and Bluetooth 4.2 built-in. Control remotely, stream data, or integrate with smart home.",
    accent: "#7c3aed",
  },
  {
    icon: Hand,
    title: "Touch Interaction",
    desc: "Capacitive touch sensors detect your presence and trigger emotion reactions. Pet it, it responds.",
    accent: "#00f5ff",
  },
  {
    icon: Palette,
    title: "Custom Expressions",
    desc: "Design your own emotion sequences using the included animation API. Program new faces in minutes.",
    accent: "#0066ff",
  },
  {
    icon: Brain,
    title: "AI Expandable",
    desc: "Open architecture supports AI integrations — connect to ChatGPT, local LLMs, or build your own emotion engine.",
    accent: "#7c3aed",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Divider line */}
      <div className="section-line mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#7c3aed] border border-[#7c3aed]/30 px-3 py-1 rounded-full bg-[#7c3aed]/5">
            CAPABILITIES
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
            Built for <span className="text-[#7c3aed] neon-text-purple">Makers</span>
          </h2>
          <p className="font-poppins text-slate-400 max-w-lg mx-auto">
            Every component chosen for maximum expressiveness, hackability, and fun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass rounded-2xl p-6 neon-border-hover transition-all cursor-default group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all"
                style={{
                  background: `${f.accent}18`,
                  border: `1px solid ${f.accent}30`,
                  boxShadow: `0 0 20px ${f.accent}10`,
                }}
              >
                <f.icon
                  size={22}
                  style={{ color: f.accent }}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="font-orbitron font-semibold text-white text-sm tracking-wider mb-2">
                {f.title}
              </h3>
              <p className="font-poppins text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
              <div
                className="mt-4 h-[1px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
