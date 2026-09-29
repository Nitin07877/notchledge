"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "cyan", name: "Aqua Cyan", bg: "bg-cyan-500", image: "/screens/theme-cyan.png" },
  { id: "pink", name: "Neon Pink", bg: "bg-pink-500", image: "/screens/theme-pink.png" },
  { id: "purple", name: "Deep Purple", bg: "bg-purple-500", image: "/screens/theme-purple.png" },
  { id: "green", name: "Toxic Green", bg: "bg-green-500", image: "/screens/theme-green.png" },
  { id: "yellow", name: "Cyber Yellow", bg: "bg-yellow-500", image: "/screens/theme-yellow.png" },
];

export default function Themes() {
  const [active, setActive] = useState(themes[0]);

  return (
    // 🚀 Background updated to support Light & Dark mode seamlessly
    <section className="py-24 px-6 bg-white dark:bg-[#030303] text-center overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3 transition-colors">
          Make it yours.
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mb-12 text-sm md:text-base transition-colors">
          Match your workspace with 5 distinct color accents.
        </p>

        {/* 🚀 Ultra-Sleek macOS Style Color Picker (Premium Light/Dark look) */}
        <div className="flex justify-center items-center gap-2 mb-16 p-2 bg-slate-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-full w-max mx-auto shadow-sm dark:shadow-lg transition-colors">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t)}
              className="relative flex items-center justify-center w-10 h-10 rounded-full group"
              aria-label={`Select ${t.name} theme`}
            >
              {/* Color Dot */}
              <span className={`w-5 h-5 rounded-full ${t.bg} shadow-inner z-10 transition-transform group-hover:scale-110`} />
              
              {/* Animated Selection Ring */}
              {active.id === t.id && (
                <motion.div
                  layoutId="activeThemeRing"
                  // 🚀 Ring styling adjusts for light/dark background
                  className="absolute inset-0 border-2 border-slate-300 dark:border-white/30 rounded-full bg-slate-200/50 dark:bg-white/5"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* 🚀 Real Screenshot Preview - Smooth Crossfade, No Cropping */}
        <div className="relative mx-auto w-full max-w-3xl">
           <div className="relative w-full rounded-2xl overflow-hidden shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.4)] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] transition-colors">
             
             {/* Invisible placeholder trick */}
             <img src={themes[0].image} alt="placeholder" className="w-full h-auto invisible block" />
             
             <AnimatePresence>
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={`${active.name} Theme Preview`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  // object-contain ensures it never crops
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
             </AnimatePresence>
             
           </div>
        </div>
      </div>
    </section>
  );
}