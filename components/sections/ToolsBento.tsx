"use client";

import { motion } from "framer-motion";
import { Calculator, Clock, Cloud, FileText } from "lucide-react";

// 🚀 Framer Motion Animation Variants for Pro Feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ToolsBento() {
  return (
    // 🚀 Premium Background with Atmospheric Purple Glow
    <section className="py-24 px-6 bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden relative">
      
      {/* 🔮 Background Purple Glow Blobs for Modern SaaS Aesthetic */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 dark:bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-600/10 dark:bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 🚀 Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 transition-colors">
            Everything you need.<br className="hidden md:block" /> Right in your notch.
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base transition-colors">
            No more switching windows. Access your most important tools instantly by simply hovering over the top of your screen.
          </p>
        </motion.div>

        {/* 🚀 Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[220px]"
        >
          
          {/* Card 1: Screen Time */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/5 relative overflow-hidden group hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none">
            <div className="relative z-10 w-[60%] md:w-1/2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-3 text-xs font-semibold tracking-wide uppercase transition-colors">
                <Clock size={16} /> Screen Time
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors">Track your focus.</h3>
              <p className="text-slate-500 dark:text-gray-500 text-xs md:text-sm leading-relaxed transition-colors">
                See how much time you've spent on Chrome, Xcode, or any app without opening Activity Monitor.
              </p>
            </div>
            
            {/* Abstract UI Element */}
            <div className="absolute -right-4 -bottom-4 w-[50%] h-[110%] bg-slate-50/80 dark:bg-black/40 backdrop-blur-md rounded-tl-2xl border-t border-l border-gray-200 dark:border-white/5 shadow-2xl p-5 transform group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-500">
               <div className="text-3xl md:text-4xl font-black mb-4 text-slate-800 dark:text-gray-200">3h 1m</div>
               <div className="w-full h-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-full mb-3"><div className="w-3/4 h-full bg-emerald-500 rounded-full"></div></div>
               <div className="w-full h-3 bg-purple-100 dark:bg-purple-500/10 rounded-full mb-3"><div className="w-1/4 h-full bg-purple-500 rounded-full"></div></div>
            </div>
          </motion.div>

          {/* Card 2: Weather */}
          <motion.div variants={itemVariants} className="bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-none group">
             <div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3 text-xs font-semibold tracking-wide uppercase transition-colors">
                  <Cloud size={16} /> Weather
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1 transition-colors">Live Updates.</h3>
             </div>
             <div className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-gray-600 group-hover:scale-105 transition-transform duration-300 origin-left">
               25°
             </div>
          </motion.div>

          {/* Card 3: Notes */}
          <motion.div variants={itemVariants} className="bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-none">
             <div>
                <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 mb-3 text-xs font-semibold tracking-wide uppercase transition-colors">
                  <FileText size={16} /> Quick Notes
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 transition-colors">Jot it down.</h3>
             </div>
             <div className="p-3 bg-slate-100 dark:bg-black/30 rounded-lg text-slate-600 dark:text-gray-400 text-xs font-mono border border-gray-200/50 dark:border-white/5 shadow-inner transition-colors">
                <span className="text-purple-600 dark:text-purple-400">TODO:</span> Buy coffee<br/>
                <span className="text-blue-600 dark:text-blue-400">CALL:</span> Mom @ 5PM<span className="animate-pulse">_</span>
             </div>
          </motion.div>

          {/* Card 4: Calculator */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-white/70 dark:bg-white/[0.02] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-white/5 relative overflow-hidden group hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 flex items-center shadow-sm hover:shadow-md dark:shadow-none">
             <div className="w-[45%] md:w-[40%] pr-6">
                <div className="grid grid-cols-4 gap-1.5 md:gap-2 p-3 bg-slate-100 dark:bg-black/40 rounded-xl border border-gray-200/50 dark:border-white/5 shadow-inner">
                   {[7,8,9,'/',4,5,6,'*',1,2,3,'-'].map((n, i) => (
                     <div key={i} className="h-7 md:h-8 bg-white dark:bg-white/5 rounded-md flex items-center justify-center font-mono text-[10px] md:text-xs font-medium border border-gray-200/50 dark:border-white/5 text-slate-700 dark:text-gray-300 shadow-sm transition-colors cursor-default hover:bg-slate-50 dark:hover:bg-white/10">
                       {n}
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="w-[55%] md:w-[60%] pl-6 md:pl-8 border-l border-gray-200 dark:border-white/10 transition-colors">
               <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 mb-3 text-xs font-semibold tracking-wide uppercase transition-colors">
                  <Calculator size={16} /> Convert & Calc
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 transition-colors">Math made easy.</h3>
                <p className="text-slate-500 dark:text-gray-500 text-xs md:text-sm leading-relaxed transition-colors">
                  Perform quick calculations or convert currencies and units on the fly without breaking your workflow.
                </p>
             </div>
          </motion.div>

        </motion.div>

        {/* 🚀 New Section: Notch Previews (Corrected Sequence & Titles) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-32 pt-16 border-t border-gray-200 dark:border-white/10"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-4">
              Real-time Notch Previews
            </h2>
            <p className="text-slate-500 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Hover over the notch previews to see how they dynamically respond to your actions.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-14 relative max-w-6xl mx-auto px-4 md:px-0">
            
            {/* 1. Analytics Notch (Top Left) */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group w-full md:w-1/3 z-10">
              <motion.div 
                whileHover={{ y: 15, scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative cursor-pointer drop-shadow-2xl w-full"
              >
                <img src="/screens/editedphoto3.png" alt="Live Analytics Notch" className="w-full h-auto object-contain" />
              </motion.div>
              <div className="mt-8 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                <h4 className="font-bold text-lg md:text-xl mb-1">Live Analytics</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400">Track active visitors directly in your notch.</p>
              </div>
            </motion.div>

            {/* 2. Message Preview & Pin Notch (Middle, Pushed Down) */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group w-full md:w-1/3 md:mt-24 z-20">
              <motion.div 
                whileHover={{ y: 15, scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative cursor-pointer drop-shadow-2xl w-full"
              >
                <img src="/screens/editedphoto2.png" alt="Message Preview and Pin Notch" className="w-full h-auto object-contain" />
              </motion.div>
              <div className="mt-8 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                <h4 className="font-bold text-lg md:text-xl mb-1">Message Preview & Pin</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400">Type custom text and pin it right inside your notch.</p>
              </div>
            </motion.div>

            {/* 3. Revenue Notch (Top Right) */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group w-full md:w-1/3 z-10">
              <motion.div 
                whileHover={{ y: 15, scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative cursor-pointer drop-shadow-2xl w-full"
              >
                <img src="/screens/editedphoto1.png" alt="Revenue Notch" className="w-full h-auto object-contain" />
              </motion.div>
              <div className="mt-8 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                <h4 className="font-bold text-lg md:text-xl mb-1">Revenue Tracking</h4>
                <p className="text-sm text-slate-500 dark:text-gray-400">Keep an eye on your earnings and balances.</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}