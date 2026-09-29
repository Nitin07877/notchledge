"use client";

import { Container } from "@/components/ui/Container";
import { tools, heroToolIds } from "@/config/product";
import { toolIcons } from "@/components/toolIcons";
import { motion } from "framer-motion";

export function HeroTools() {
  const featured = heroToolIds.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);

  return (
    // 🚀 Background and Border updated for Light/Dark mode transitions
    <section id="tools" className="py-32 relative overflow-hidden bg-slate-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 transition-colors duration-500">
      
      {/* 🚀 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-300/30 dark:bg-purple-900/10 blur-[160px] pointer-events-none rounded-full transition-colors duration-500" />

      <Container className="relative z-10">
        
        {/* 🚀 Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 text-xs font-semibold tracking-widest text-purple-700 dark:text-purple-400 uppercase transition-colors">
            The Big Two
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Your business, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-gray-600">without opening a dashboard.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto transition-colors">
            Get instant, real-time insights right inside your Mac&apos;s notch. Everything you need, zero friction.
          </p>
        </div>

        {/* 🚀 Back to Original Left-Right Grid with Smooth Animation */}
        <div className="space-y-24">
          {featured.map((tool, i) => {
            const Icon = toolIcons[tool.id];
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Left/Right Text Content */}
                <div className="flex flex-col justify-center">
                  
                  {/* Tool Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 rounded-full border border-purple-200 bg-purple-50 dark:border-white/10 dark:bg-white/5 w-max text-xs font-semibold text-purple-700 dark:text-purple-300 transition-colors">
                    {Icon && <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400 transition-colors" />}
                    {tool.name}
                  </div>

                  <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4 transition-colors">
                    {tool.hook}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 transition-colors">
                    {tool.description}
                  </p>

                  <ul className="flex flex-wrap gap-2.5">
                    {tool.bullets.map((b) => (
                      <li 
                        key={b} 
                        className="rounded-full border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-700 dark:text-gray-300 shadow-sm dark:shadow-none transition-colors"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot Container with Premium Glass Effect */}
                <div className="relative group rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.8)] p-2 md:p-3 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 dark:from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={tool.image} 
                    alt={`${tool.name} screenshot`} 
                    className="w-full h-auto rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-500" 
                    loading="lazy" 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}