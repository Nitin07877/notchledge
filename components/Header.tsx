"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { product } from "@/config/product";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const getHref = (id: string) => (isHome ? id : `/${id}`);

  return (
    // 🚀 Header Background & Border updated for Light/Dark mode
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#050505]/90 backdrop-blur-xl transition-colors duration-500">
      <Container className="flex h-16 items-center justify-between">
        
        {/* 🚀 1. Left Side: Brand Logo */}
        <div className="flex items-center">
          <Link 
            href={isHome ? "#top" : "/"} 
            className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-2 group transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-500 shadow-[0_0_10px_rgba(147,51,234,0.5)] dark:shadow-[0_0_10px_rgba(168,85,247,0.9)] group-hover:scale-125 transition-transform" />
            {product.name}
          </Link>
        </div>

        {/* 🚀 2. Absolute Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href={getHref("#tools")} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            Tools
          </Link>
          <Link href={getHref("#integrations")} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            Integrations
          </Link>
          <Link href="/how-to-use" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            How to use
          </Link>
          <Link href={getHref("#pricing")} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href={getHref("#faq")} className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>

        {/* 🚀 3. Right Side: Buy License Button */}
        <div className="flex items-center">
          <a
            // 🚀 DODO PAYMENTS LINK UPDATED HERE
            href="https://checkout.dodopayments.com/buy/pdt_0NofQcIY78ORdEuafxEvM?quantity=1"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white dark:bg-white dark:text-black transition-all hover:scale-105 active:scale-95 shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hidden md:inline-block"
          >
            Buy license
          </a>
        </div>

      </Container>
    </header>
  );
}