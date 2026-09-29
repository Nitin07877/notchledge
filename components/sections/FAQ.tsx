"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { faqs as importedFaqs } from "@/config/product"; // तेरे पुराने FAQs

// 🚀 मैंने 3 नए स्मार्ट FAQs जोड़ दिए हैं जो NotchLedge के लिए परफेक्ट हैं
const additionalFaqs = [
  {
    question: "Does NotchLedge drain my MacBook's battery?",
    answer: "Not at all. NotchLedge is built natively and highly optimized for macOS. It intelligently pauses heavy background activities when you're not interacting with it."
  },
  {
    question: "Will it work on older Macs without a physical notch?",
    answer: "Absolutely! NotchLedge includes a 'Simulated Notch' feature, bringing the exact same sleek experience to older Macs and external displays."
  },
  {
    question: "Are future updates included in the price?",
    answer: "Yes! Your one-time purchase includes all minor updates, bug fixes, and improvements. No hidden fees or recurring subscriptions."
  }
];

// पुराने और नए FAQs को मिला दिया
const allFaqs = [...importedFaqs, ...additionalFaqs];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    // 🚀 Background & Border Theme Support
    <section id="faq" className="py-24 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#030303] transition-colors duration-300">
      <Container className="max-w-3xl">
        
        {/* 🚀 Centered Header Section */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase">
            FAQ
          </p>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-black dark:text-white text-balance mx-auto transition-colors">
            Before you download.
          </h2>
        </div>

        {/* 🚀 Centered & Clean Accordion Layout */}
        <div className="mx-auto max-w-2xl divide-y divide-gray-200 dark:divide-white/10 border-t border-b border-gray-200 dark:border-white/10 transition-colors">
          {allFaqs.map((item, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none"
                aria-expanded={open === i}
              >
                {/* 🚀 Question text size perfectly balanced */}
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-violet-600 dark:text-violet-400" : ""
                  }`}
                />
              </button>
              
              {/* 🚀 Smooth animated answer reveal */}
              {open === i && (
                <div className="overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}