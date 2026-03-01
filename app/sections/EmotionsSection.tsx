"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const emotions = [
  {
    name: "Happy",
    emoji: "😊",
    eyes: "^‿^",
    color: "#00f5ff",
    bg: "from-cyan-900/40 to-blue-900/40",
    desc: "Default greeting mode",
  },
  {
    name: "Wink",
    emoji: "😉",
    eyes: "^‿-",
    color: "#f59e0b",
    bg: "from-yellow-900/40 to-orange-900/40",
    desc: "Playful interaction",
  },
  {
    name: "Angry",
    emoji: "😠",
    eyes: ">‿<",
    color: "#ef4444",
    bg: "from-red-900/40 to-rose-900/40",
    desc: "Triggered by touch overload",
  },
  {
    name: "Sleepy",
    emoji: "😴",
    eyes: "–‿–",
    color: "#8b5cf6",
    bg: "from-purple-900/40 to-indigo-900/40",
    desc: "Idle timeout mode",
  },
  {
    name: "Heart",
    emoji: "🥰",
    eyes: "♥‿♥",
    color: "#ec4899",
    bg: "from-pink-900/40 to-rose-900/40",
    desc: "Love reaction",
  },
];

export default function EmotionsSection() {
  const [active, setActive] = useState(0);
  const current = emotions[active];

  return (
    <section id="emotions" className="relative py-24 cyber-grid-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#ec4899] border border-[#ec4899]/30 px-3 py-1 rounded-full bg-[#ec4899]/5">
            EXPRESSIONS
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mt-4 mb-4">
            Emotions <span style={{ color: current.color }} className="transition-colors duration-500">Gallery</span>
          </h2>
          <p className="font-poppins text-slate-400 max-w-md mx-auto">
            EMOTI-BOT reacts to its environment with a library of expressive animations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Live preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative glass rounded-3xl p-12 bg-gradient-to-br ${current.bg} transition-all duration-700 flex flex-col items-center justify-center`}
            style={{ minHeight: "360px", border: `1px solid ${current.color}30` }}
          >
            {/* Robot face display */}
            <div
              className="w-48 h-44 rounded-2xl bg-[#0a0a0a] flex flex-col items-center justify-center mb-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
              style={{ border: `2px solid ${current.color}30` }}
            >
              <motion.div
                key={active}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="font-orbitron text-5xl text-white text-center leading-tight"
              >
                {current.eyes}
              </motion.div>
              {/* Scanline effect */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-10">
                <div
                  className="w-full h-1"
                  style={{
                    background: current.color,
                    animation: "scanline 3s linear infinite",
                  }}
                />
              </div>
            </div>

            <motion.div
              key={`label-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div
                className="font-orbitron text-2xl font-bold mb-1"
                style={{ color: current.color }}
              >
                {current.name}
              </div>
              <div className="font-poppins text-slate-400 text-sm">{current.desc}</div>
            </motion.div>

            {/* Corner decoration */}
            <div
              className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg opacity-50"
              style={{ borderColor: current.color }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg opacity-50"
              style={{ borderColor: current.color }}
            />
          </motion.div>

          {/* Emotion selector cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {emotions.map((e, i) => (
              <motion.button
                key={e.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`glass rounded-2xl p-4 flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer ${
                  active === i ? "border-2" : "border border-white/5 hover:border-white/20"
                }`}
                style={
                  active === i
                    ? {
                        borderColor: e.color,
                        boxShadow: `0 0 20px ${e.color}30`,
                        background: `${e.color}10`,
                      }
                    : {}
                }
              >
                <span className="text-3xl">{e.emoji}</span>
                <span
                  className="font-orbitron text-xs tracking-wider transition-colors"
                  style={{ color: active === i ? e.color : "#94a3b8" }}
                >
                  {e.name}
                </span>
              </motion.button>
            ))}

            {/* More coming soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-4 flex flex-col items-center gap-2 border border-dashed border-white/10"
            >
              <span className="text-3xl opacity-40">➕</span>
              <span className="font-orbitron text-xs text-slate-600 tracking-wider">MORE</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
