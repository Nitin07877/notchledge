"use client";

import { Container } from "@/components/ui/Container";
import { product } from "@/config/product";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, DownloadCloud } from "lucide-react";

export function Pricing() {
  return (
    // 🚀 Background updated for Light/Dark mode
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
      
      {/* 🚀 Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-300/30 dark:bg-purple-900/10 blur-[150px] pointer-events-none rounded-full transition-colors duration-500" />

      <Container className="max-w-4xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 text-xs font-semibold tracking-widest text-purple-700 dark:text-purple-400 uppercase transition-colors">
            Simple Pricing
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            One price. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-600">Lifetime access.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed transition-colors">
            Buy it once and unlock every powerful tool, future updates included. Backed by our 14-day money-back guarantee.
          </p>
        </div>

        {/* 🚀 Premium Pricing Card (Made Compact/Smaller) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md relative" /* 🚀 max-w-lg से max-w-md कर दिया ताकि छोटा लगे */
        >
          {/* Glowing Border Wrap */}
          <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-400/40 to-transparent dark:from-purple-500/50 rounded-[2rem] blur-sm opacity-50 transition-colors"></div>
          
          {/* 🚀 Card Container (Padding reduced to p-8) */}
          <div className="relative rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl p-8 shadow-xl dark:shadow-2xl transition-colors duration-500">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 transition-colors">
                  {product.name} <Sparkles size={18} className="text-purple-500 dark:text-purple-400" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 transition-colors">{product.requirement}</p>
              </div>
              <span className="px-3 py-1 bg-slate-100 border border-slate-200 dark:bg-white/5 dark:border-white/10 rounded-full text-[10px] font-bold text-slate-600 dark:text-gray-300 tracking-wider transition-colors">
                LIFETIME
              </span>
            </div>

            <div className="mb-6 flex items-baseline gap-3 border-b border-gray-200 dark:border-white/10 pb-6 transition-colors">
              <span className="font-display font-black text-5xl md:text-6xl text-slate-900 dark:text-white transition-colors">{product.pricing.price}</span>
              {product.pricing.originalPrice && (
                <span className="text-lg text-slate-400 dark:text-gray-500 line-through font-medium transition-colors">{product.pricing.originalPrice}</span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {product.pricing.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300 transition-colors">
                  <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <a
              // 🚀 DODO PAYMENTS LINK
              href={process.env.CHECKOUT_URL}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-center text-base font-bold text-white dark:bg-white dark:text-black transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Buy lifetime license
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-gray-500 transition-colors">
              
              <a 
                href={product.downloadUrl} 
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium flex items-center gap-1 transition-colors"
              >
                
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}