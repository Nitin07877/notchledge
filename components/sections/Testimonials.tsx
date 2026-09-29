"use client";

import { Container } from "@/components/ui/Container";
import { testimonials } from "@/config/product";

// Renders nothing until you add real quotes in config/product.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;
  
  return (
    // 🚀 Background & Border updated for Light/Dark mode
    <section className="py-24 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#030303] transition-colors duration-300">
      <Container>
        
        {/* 🚀 Centered Section Header to match FAQ and Pricing */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-violet-200 bg-violet-100 dark:border-violet-500/30 dark:bg-violet-500/10 text-xs font-bold tracking-widest text-violet-700 dark:text-violet-400 uppercase transition-colors">
            What people say
          </div>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white transition-colors">
            Loved by Mac users.
          </h2>
        </div>

        {/* 🚀 Responsive Grid for Testimonial Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure 
              key={t.name} 
              // 🚀 Premium Glassmorphism Cards
              className="group rounded-3xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-[#080808] p-8 shadow-sm hover:shadow-lg dark:shadow-none dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <blockquote className="text-slate-700 dark:text-gray-300 leading-relaxed text-base transition-colors">
                “{t.quote}”
              </blockquote>
              
              {/* 🚀 Stylish Footer with Initial Avatar */}
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-white/5 border border-violet-200 dark:border-white/10 flex items-center justify-center text-violet-700 dark:text-white font-bold text-sm shrink-0 transition-colors">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm transition-colors">
                    {t.name}
                  </div>
                  {t.role && (
                    <div className="text-xs text-slate-500 dark:text-gray-500 transition-colors">
                      {t.role}
                    </div>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}