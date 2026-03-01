"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus, ShoppingCart, ChevronDown, Zap, Check } from "lucide-react";

const specs = [
  {
    category: "Processor",
    items: [
      "ESP32-WROOM-32 module",
      "Dual-core Xtensa LX6 @ 240MHz",
      "520 KB SRAM, 4 MB Flash",
    ],
  },
  {
    category: "Display",
    items: ["OLED 128×64 or 128×128 (SSD1306/SSD1309)", "60fps animation support", "Custom emotion library"],
  },
  {
    category: "Connectivity",
    items: ["WiFi 802.11 b/g/n (2.4 GHz)", "Bluetooth 4.2 + BLE", "USB-C for power & flashing"],
  },
  {
    category: "Sensors & I/O",
    items: ["Capacitive touch (up to 10 pins)", "GPIO breakout", "I2C / SPI / UART exposed"],
  },
  {
    category: "Power",
    items: ["5V via USB-C", "Optional LiPo battery support", "Deep sleep: ~10µA"],
  },
  {
    category: "Dimensions",
    items: ["~70 × 70 × 65 mm (approx)", "3D-printed enclosure (PLA)", "Custom colors available"],
  },
];

const images = [
  { src: "/images/robot-red.png", label: "Red Edition" },
  { src: "/images/robot-white.png", label: "White Edition" },
  { src: "/images/robot-dark.png", label: "Dark Edition" },
];

export default function ProductSection() {
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [openSpec, setOpenSpec] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="product" className="relative py-24 overflow-hidden">
      <div className="section-line mb-24" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.05)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-orbitron text-xs tracking-[0.3em] text-[#00f5ff] border border-[#00f5ff]/30 px-3 py-1 rounded-full bg-[#00f5ff]/5">
            SHOP
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-black text-white mt-4">
            Get <span className="text-[#00f5ff] neon-text">EMOTI-BOT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl overflow-hidden neon-border p-6 mb-4">
              <div className="relative w-full aspect-square">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeImage].src}
                      alt={images[activeImage].label}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={img.label}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-1 aspect-square glass rounded-xl overflow-hidden transition-all border ${
                    activeImage === i
                      ? "border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                      : "border-white/5 hover:border-white/20"
                  }`}
                >
                  <Image src={img.src} alt={img.label} fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 neon-border">
              {/* Badge */}
              <span className="inline-flex items-center gap-1 font-orbitron text-xs px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/20 mb-4">
                <Zap size={10} fill="currentColor" /> PRE-ORDER NOW
              </span>

              <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                EMOTI-BOT ESP32
              </h3>
              <p className="font-poppins text-slate-400 text-sm mb-6 leading-relaxed">
                Expressive robot kit with ESP32, OLED eyes, WiFi/BT, touch sensors, and
                3D-printed enclosure. Ready to assemble and program.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-orbitron text-4xl font-black text-[#00f5ff] neon-text">
                  $89
                </span>
                <span className="font-poppins text-slate-500 line-through text-lg">$119</span>
                <span className="font-orbitron text-xs text-green-400 border border-green-400/30 px-2 py-0.5 rounded-full">
                  SAVE 25%
                </span>
              </div>

              {/* What's included */}
              <div className="mb-6 space-y-2">
                {[
                  "ESP32 dev board",
                  "OLED display module",
                  "3D-printed enclosure (color of choice)",
                  "All wiring & headers",
                  "Pre-loaded emotion firmware",
                  "Online documentation access",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 font-poppins text-sm text-slate-300">
                    <Check size={14} className="text-[#00f5ff] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-orbitron text-xs text-slate-500 tracking-wider">QTY</span>
                <div className="flex items-center gap-3 glass rounded-xl px-4 py-2">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="text-[#00f5ff] hover:text-white transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-orbitron text-lg w-8 text-center text-white">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="text-[#00f5ff] hover:text-white transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="font-orbitron text-slate-500 text-sm">
                  = ${(qty * 89).toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={handleAdd}
                className={`btn-shine w-full font-orbitron text-sm font-bold py-4 rounded-xl tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                    : "bg-gradient-to-r from-[#00f5ff] to-[#0066ff] text-[#020818] shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)]"
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} /> ADDED TO CART
                  </>
                ) : (
                  <>
                    <ShoppingCart size={18} /> PRE-ORDER — ${89 * qty}
                  </>
                )}
              </button>

              <p className="font-poppins text-xs text-slate-600 text-center mt-3">
                Expected shipping: Q2 2025 · Free worldwide shipping over $150
              </p>
            </div>

            {/* Specs accordion */}
            <div className="mt-6 space-y-2">
              <h4 className="font-orbitron text-sm text-slate-400 tracking-wider mb-3 uppercase">
                Technical Specs
              </h4>
              {specs.map((s, i) => (
                <div key={s.category} className="glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenSpec(openSpec === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 font-orbitron text-sm text-white hover:text-[#00f5ff] transition-colors"
                  >
                    <span className="tracking-wider">{s.category}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${openSpec === i ? "rotate-180 text-[#00f5ff]" : "text-slate-500"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openSpec === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-4 border-t border-white/5">
                          {s.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-2 font-poppins text-sm text-slate-400 py-1"
                            >
                              <span className="text-[#00f5ff] mt-0.5">›</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
