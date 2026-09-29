"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const integratedTools = [
  { name: "Google Analytics", category: "Analytics", domain: "google.com" },
  { name: "Plausible", category: "Analytics", domain: "plausible.io" },
  { name: "Fathom", category: "Analytics", domain: "usefathom.com" },
  { name: "Stripe", category: "Revenue", domain: "stripe.com" },
  { name: "Dodo Payments", category: "Revenue", domain: "dodopayments.com" },
  { name: "Lemon Squeezy", category: "Revenue", domain: "lemonsqueezy.com" }
];

export function Integrations() {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-300/30 dark:bg-purple-900/20 blur-[120px] pointer-events-none rounded-full transition-colors duration-500" />

      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#0a0a0a]/80 backdrop-blur-xl p-10 md:p-16 text-center overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-2xl transition-colors duration-500"
        >
          {/* Inner Light Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent dark:from-white/5 pointer-events-none transition-colors duration-500" />

          {/* Premium Badge */}
          <div className="relative z-10 inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 text-xs font-bold tracking-widest text-purple-700 dark:text-purple-400 uppercase transition-colors">
            Seamless Integrations
          </div>

          {/* Main Heading */}
          <h2 className="relative z-10 font-display font-bold text-3xl md:text-5xl text-slate-900 dark:text-white tracking-tight mb-6 transition-colors">
            Works with the tools <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-600">you already use.</span>
          </h2>
          
          {/* Subheadline */}
          <p className="relative z-10 mx-auto max-w-2xl text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed mb-12 transition-colors">
            Paste in a read-only key and your live numbers show up right in the notch. The key stays local on your Mac—it can only read your balance, ensuring your accounts remain 100% secure.
          </p>

          {/* Compact Pill Layout with Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            {integratedTools.map((tool, index) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-3 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 pl-2 pr-5 py-2 text-sm font-medium text-slate-800 dark:text-white hover:bg-slate-50 hover:border-gray-300 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all cursor-default shadow-sm"
              >
                {/* 🚀 Logo Image - Updated to Google Favicon API for 100% reliability */}
                <div className="w-8 h-8 bg-white border border-gray-100 dark:border-none rounded-full p-1.5 flex items-center justify-center shrink-0 shadow-sm dark:shadow-inner">
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=128`} 
                    alt={`${tool.name} logo`} 
                    className="w-full h-full object-contain rounded-full"
                    onError={(e) => {
                      // Fallback if even Google fails
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff&size=128&rounded=true`;
                    }}
                  />
                </div>
                
                {/* Tool Name & Category */}
                <div>
                  {tool.name}
                  <span className="ml-2 text-xs text-slate-400 dark:text-gray-500 font-normal group-hover:text-slate-600 dark:group-hover:text-gray-300 transition-colors">
                    {tool.category}
                  </span>
                </div>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}