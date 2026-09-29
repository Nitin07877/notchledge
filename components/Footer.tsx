"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { product } from "@/config/product";

export function Footer() {
  return (
    // 🚀 Background & Border updated for Light/Dark mode
    <section className="bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
      <footer className="border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
        <Container>
          
          {/* 🚀 Main Footer Links Grid (3 Columns + 1 Brand Column for better spacing) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            
            {/* Column 1: Brand Info (Optional but makes it look pro) */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2 mb-4 transition-colors">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-500" />
                {product.name}
              </Link>
            </div>

            {/* Column 2: Product */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6 transition-colors">Product</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
                <li><Link href="/#tools" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Tools</Link></li>
                <li><Link href="/#themes" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Themes</Link></li>
                <li><Link href="/#pricing" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Pricing</Link></li>
                <li><Link href="/#faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Column 3: Guides */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6 transition-colors">Guides</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
                <li><Link href="/how-to-use" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">How to use your notch</Link></li>
              </ul>
            </div>

            {/* Column 4: Company & Links */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-6 transition-colors">Company</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400">
                <li>
                  <a href={`mailto:${product.email}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
                </li>
                <li><Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Terms</Link></li>
                {/* 🚀 X (Twitter) Link - Replace 'yourhandle' with your actual username */}
                <li>
                  <a href="https://x.com/FastTech7010" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 🚀 Bottom Bar (Copyright & Disclaimer) */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-white/10 text-xs md:text-sm text-slate-500 dark:text-gray-500 transition-colors">
            <p className="mb-2 md:mb-0">
              © {new Date().getFullYear()} {product.name}. Built for people who keep too many windows open.
            </p>
            <p>
              Not affiliated with Apple Inc.
            </p>
          </div>

        </Container>
      </footer>
    </section>
  );
}