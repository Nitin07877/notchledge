"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { product, highlights } from "@/config/product";
import { ScreenshotShow } from "@/components/ScreenshotShow";
import { Sparkles, ArrowRight, PlayCircle, X } from "lucide-react";

export function Hero() {
  // 🚀 State to manage video modal open/close
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // 🚀 Disable background scrolling when video is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoOpen]);

  return (
    <>
      {/* 🚀 Main Hero Section */}
      <section id="top" className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
        
        {/* 🚀 Background Glow Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-400/20 dark:bg-purple-600/15 blur-[120px] dark:blur-[140px] pointer-events-none rounded-full transition-colors duration-500" />

        <Container className="text-center relative z-10">
          
          {/* 🚀 Sleek Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-1.5 text-xs font-semibold text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300 mb-8 backdrop-blur-md shadow-sm dark:shadow-lg transition-colors"
          >
            <Sparkles size={14} className="text-purple-600 dark:text-purple-400" />
            Built for people who keep too many windows open
          </motion.div>

          {/* 🚀 Punchy Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-6xl text-slate-900 dark:text-white tracking-tight text-balance max-w-4xl mx-auto leading-[1.15] transition-colors"
          >
            Your entire Mac workspace, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400">
              right inside your notch.
            </span>
          </motion.h1>

          {/* 🚀 Engaging Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-sm md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors"
          >
            {product.subheadline}
          </motion.p>

          {/* 🚀 Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              Get {product.name}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#tools"
              className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20 transition-all backdrop-blur-md shadow-sm dark:shadow-none"
            >
              See all tools
            </a>
          </motion.div>

          {/* 🚀 Watch Demo Video Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
              Click here for Demo Video
            </button>
          </motion.div>

          {/* 🚀 Highlights / Perks */}
          <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-slate-600 dark:text-gray-400 font-medium transition-colors">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.5)] dark:shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                {h}
              </li>
            ))}
          </ul>
          
          <p className="mt-4 text-xs text-slate-500 dark:text-gray-500 font-medium tracking-wide transition-colors">{product.requirement}</p>

          {/* Screenshot Showcase Component */}
          <div className="mt-12">
            <ScreenshotShow />
          </div>
        </Container>
      </section>

      {/* 🚀 Fullscreen Video Modal (Overlay) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
          >
            {/* Background Click to Close */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setIsVideoOpen(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-10"
            >
              {/* Close (Cut) Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all border border-white/10 hover:scale-110"
              >
                <X size={24} />
              </button>

              {/* 🚀 FIX: Changed object-cover to object-contain so it doesn't get cut */}
              <video 
                src="/screens/demo-video.mp4" 
                autoPlay 
                controls 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}