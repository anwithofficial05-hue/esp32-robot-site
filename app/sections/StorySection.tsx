"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="relative py-24 cyber-grid-bg overflow-hidden">
      <div className="section-line mb-24" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.05)_0%,transparent_60%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#7c3aed] border border-[#7c3aed]/30 px-3 py-1 rounded-full bg-[#7c3aed]/5">
            ORIGIN
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mt-6 mb-8">
            Why Emotional
            <br />
            <span className="text-[#7c3aed] neon-text-purple">Robots Matter</span>
          </h2>

          <div className="glass rounded-3xl p-10 text-left space-y-6">
            <p className="font-poppins text-slate-300 text-lg leading-relaxed">
              Technology doesn&apos;t have to be cold. We built EMOTI-BOT because we believe
              the next generation of devices should feel <em className="text-[#00f5ff]">alive</em> — responsive,
              expressive, and genuinely delightful to interact with.
            </p>
            <p className="font-poppins text-slate-400 leading-relaxed">
              Starting from a single ESP32 and a love of maker culture, we designed a robot
              that any developer, hobbyist, or curious mind can build, modify, and make their own.
              The open architecture means you&apos;re not locked in — add sensors, connect APIs,
              teach it new faces. It&apos;s your robot.
            </p>
            <p className="font-poppins text-slate-400 leading-relaxed">
              Emotional robotics is the frontier. EMOTI-BOT is your entry point.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] flex-shrink-0" />
              <div>
                <div className="font-orbitron text-sm text-white">The EMOTI-BOT Team</div>
                <div className="font-poppins text-xs text-slate-500">Makers · Engineers · Dreamers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
