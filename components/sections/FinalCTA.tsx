"use client";

import { Container } from "@/components/ui/Container";
import { product } from "@/config/product";

export function FinalCTA() {
  return (
    // 🚀 Background & Border Theme Support
    <section className="py-24 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#030303] transition-colors duration-300 glow">
      <Container className="text-center">
        {/* 🚀 Text Colors Updated for Light/Dark */}
        <h2 className="font-display font-bold text-3xl md:text-5xl text-black dark:text-white text-balance max-w-2xl mx-auto transition-colors">
          Ready to put your notch to work?
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 transition-colors">
          One payment. Lifetime updates. 14-day refund.
        </p>
        
        <a
          // 🚀 तेरा Dodo Payments वाला लिंक यहाँ अपडेट कर दिया है
          href={process.env.CHECKOUT_URL}
          className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-3 text-sm font-medium text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400 transition-all duration-300 shadow-lg hover:scale-105"
        >
          Get {product.name}
        </a>
      </Container>
    </section>
  );
}