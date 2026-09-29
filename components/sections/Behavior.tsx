"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, Monitor, CreditCard, MessageSquareText, QrCode } from "lucide-react";

// 🚀 Concise and powerful behavior points
const points = [
  {
    title: "It stays on your Mac",
    description: "Clipboard history, notes, and file conversions never leave your machine. Secure by design.",
    icon: ShieldCheck,
    color: "text-emerald-500 dark:text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]"
  },
  {
    title: "It gets out of the way",
    description: "Open on hover with custom delay, auto-hiding during fullscreen apps. Just a seamless notch.",
    icon: EyeOff,
    color: "text-blue-500 dark:text-blue-400",
    borderHover: "hover:border-blue-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]"
  },
  {
    title: "No notch? No problem",
    description: "Toggle the simulated notch to draw one on any Mac or external display instantly.",
    icon: Monitor,
    color: "text-purple-500 dark:text-purple-400",
    borderHover: "hover:border-purple-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]"
  },
  {
    title: "One purchase, no account",
    description: "Buy once, own forever. Zero monthly subscriptions, forced signups, or background telemetry.",
    icon: CreditCard,
    color: "text-pink-500 dark:text-pink-400",
    borderHover: "hover:border-pink-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]"
  }
];

// 🚀 20 Real Tools List (Analytics is First, Custom Design Applied)
const tools = [
  "Analytics", "Timer & Stopwatch", "Screen Time", "Weather",
  "Clipboard", "Quick Notes", "File Converter", "Unit Converter",
  "Message Preview", "Screenshots", "Voice Recorder", "Focus Active",
  "Calendar", "Calculator", "Camera", "Revenue",
  "System Stats", "QR Generator", "Nature Sounds", "Drop Shelf"
];

export function Behavior() {
  return (
    // 🚀 Section Background
    <section className="py-24 border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#030303] overflow-hidden transition-colors duration-300 relative">
      <Container>
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300 uppercase transition-colors">
            Architecture & Behavior
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-black dark:text-white tracking-tight mb-4 transition-colors">
            Stays out of the way. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-600">Until you need it.</span>
          </h2>
        </div>

        {/* 🚀 Compact Grid for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div 
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative bg-white dark:bg-[#080808] rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none ${point.borderHover} ${point.glow} transition-all duration-300 flex items-start gap-4`}
              >
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon size={20} className={point.color} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-display font-semibold text-base text-black dark:text-white mb-1 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🚀 Standout Utilities Showcase: Message Preview & QR Generator */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight mb-2 transition-colors">
              Built for personality & function.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm transition-colors">
              Cast animations across your hardware bezel or generate rapid codes on the fly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Feature 1: Message / Marquee Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#080808] rounded-3xl border border-gray-200 dark:border-white/10 p-6 md:p-8 flex flex-col group hover:border-pink-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 text-pink-500 dark:text-pink-400 mb-2 font-medium text-xs">
                  <MessageSquareText size={16} /> Notch Marquee
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors">Turn your notch into a sign.</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed transition-colors">
                  Animate custom text (&quot;Hello NotchLedge&quot;) right inside the notch with Wave, Bounce, Pulse, or Rainbow styles.
                </p>
              </div>
              
              <div className="mt-auto relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111] group-hover:scale-[1.02] transition-transform duration-500 shadow-sm dark:shadow-2xl">
                <img 
                  src="/screens/message.png" 
                  alt="Notch Marquee Message Preview" 
                  className="w-full h-auto object-cover p-2 rounded-2xl" 
                />
              </div>
            </motion.div>

            {/* Feature 2: QR Generator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#080808] rounded-3xl border border-gray-200 dark:border-white/10 p-6 md:p-8 flex flex-col group hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 mb-2 font-medium text-xs">
                  <QrCode size={16} /> QR Code Generator
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-2 transition-colors">Any link, instantly a QR.</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed transition-colors">
                  Convert URLs or text strings into high-resolution QR graphics ready to copy or export instantly.
                </p>
              </div>
              
              <div className="mt-auto relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111] group-hover:scale-[1.02] transition-transform duration-500 shadow-sm dark:shadow-2xl">
                <img 
                  src="/screens/qr.png" 
                  alt="QR Code Generator Preview" 
                  className="w-full h-auto object-cover p-2 rounded-2xl" 
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* 🚀 Unique "Floating Typography" Tool List with 20 Tools */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-5xl mx-auto border-t border-gray-200/50 dark:border-white/5 pt-20 pb-10"
        >
          {/* 🔮 Atmospheric Purple Glow specifically for the Tools Cloud */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[400px] bg-purple-500/15 dark:bg-purple-600/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-500" />

          {/* Subtle Background Text (Fixed for Dark Mode Visibility) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10vw] font-black text-gray-100 dark:text-white/10 whitespace-nowrap pointer-events-none select-none z-0 transition-colors duration-300">
            ALL TOOLS
          </div>

          <div className="text-center mb-12 relative z-10">
             <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase transition-colors">
               20 Tools. One Notch.
             </h3>
          </div>

          {/* Typography Cloud Layout */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6 relative z-10 px-4">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0px 0px 8px rgba(168,85,247,0.4)" 
                }}
                className={`
                  cursor-default transition-all duration-300 font-medium
                  /* 🚀 Updated Theme classes for perfect visibility in Dark Mode */
                  ${i % 3 === 0 ? 'text-lg md:text-2xl text-slate-900 dark:text-white font-bold' : ''}
                  ${i % 3 === 1 ? 'text-sm md:text-lg text-slate-700 dark:text-gray-200' : ''}
                  ${i % 3 === 2 ? 'text-xs md:text-base text-slate-500 dark:text-gray-300 font-mono tracking-tight' : ''}
                  hover:text-purple-600 dark:hover:text-purple-400
                `}
              >
                {tool}
                {/* 🚀 Subtle dot separator */}
                {i !== tools.length - 1 && i % 4 !== 0 && (
                  <span className="inline-block ml-6 md:ml-10 text-gray-300 dark:text-gray-700 text-xs align-middle opacity-50 transition-colors">✦</span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}