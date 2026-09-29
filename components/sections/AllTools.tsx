"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Cpu, FileBox, ClipboardList } from "lucide-react";

export function AllTools() {
  return (
    // 🚀 Section Background
    <section className="py-24 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            More Power Inside
          </div>
          {/* 🚀 Main Heading */}
          <h2 className="font-display font-bold text-3xl md:text-5xl text-black dark:text-white tracking-tight mb-6 transition-colors">
            A tool for every task.
          </h2>
          {/* 🚀 Main Subtitle */}
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed transition-colors">
            Turn off what you don&apos;t need and it disappears. NotchLedge only ever holds what you actually use, keeping your Mac perfectly clean.
          </p>
        </div>

        {/* 🚀 Sleek Grid for Remaining Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: File Converter (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            // 🚀 Card Background & Border
            className="md:col-span-2 bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 group hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-300"
          >
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 mb-4 font-medium">
                <FileBox size={20} /> File Converter
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 transition-colors">Drag, drop, convert.</h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                Drop images, PDFs, or documents directly onto the notch. Convert them to JPEG, PNG, PDF, or HEIC instantly without opening heavy web converters.
              </p>
            </div>
            {/* 🚀 Image Container */}
            <div className="md:w-1/2 w-full mt-6 md:mt-0 relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-[#111] transition-colors">
              <img 
                src="/screens/files.png" 
                alt="File Converter Tool" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </motion.div>

          {/* Card 2: System Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 flex flex-col group hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-300"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400 mb-4 font-medium">
                <Cpu size={20} /> System Stats
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3 transition-colors">Monitor your Mac.</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                Keep an eye on CPU, RAM, Network speeds, and disk space with beautiful real-time graphs.
              </p>
            </div>
            <div className="mt-auto relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-xl transition-colors">
              <img 
                src="/screens/systemstats.png" 
                alt="System Stats" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
              />
            </div>
          </motion.div>

          {/* Card 3: Clipboard Manager */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-[#0a0a0a] rounded-3xl border border-gray-200 dark:border-white/10 p-8 flex flex-col group hover:border-gray-300 dark:hover:border-white/20 transition-colors duration-300"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 text-yellow-500 dark:text-yellow-400 mb-4 font-medium">
                <ClipboardList size={20} /> Clipboard History
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3 transition-colors">Never lose a link.</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">
                Access everything you&apos;ve copied recently. Search through texts, hex codes, or links instantly.
              </p>
            </div>
            <div className="mt-auto relative rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-xl transition-colors">
              <img 
                src="/screens/clipboard.png" 
                alt="Clipboard History" 
                className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500" 
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}