import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { product } from "@/config/product";
import { Mail, ShieldCheck, Key, ArrowRight, BarChart3, DollarSign, Power } from "lucide-react";

export const metadata: Metadata = {
  title: `How to use ${product.name}`,
  description: `Complete step-by-step guide: from unzipping your email download, bypassing macOS security, activating your license key, setting up revenue & stats, to quitting the app.`
};

// 🚀 Detailed step-by-step guide including the Quit feature at the end
const steps = [
  {
    step: "01",
    icon: Mail,
    title: "Check Your Email & Unzip",
    description: `Right after your secure purchase via Dodo Payments, you will receive a confirmation email containing your app download link and your customer portal/profile access. Download the zip file and extract (unzip) it to reveal the application.`,
    highlight: "Keep your receipt email safe for future access."
  },
  {
    step: "02",
    icon: ShieldCheck,
    title: "Move to Applications & Bypass Gatekeeper",
    description: `Drag the app into your Mac's 'Applications' folder. When launching for the first time, right-click (or Control-click) the app icon and select 'Open'. If macOS shows an unidentified developer warning, open your Mac's 'System Settings > Privacy & Security', scroll down to find the blocked app warning, and click 'Open Anyway'.`,
    highlight: "Standard macOS security protocol for native utilities."
  },
  {
    step: "03",
    icon: Key,
    title: "Retrieve & Enter Your License Key",
    description: `To get your license key, click the link in your welcome email to visit your customer profile page. Copy your unique license key from your profile dashboard, paste it into the app's activation prompt, and click Verify.`,
    highlight: "Instantly unlocks all tools and lifetime updates."
  },
  {
    step: "04",
    icon: ArrowRight,
    title: "Click 'Get Started' & Initialize",
    description: `Once your license key is successfully verified, click the 'Get Started' button. The app will initialize and guide you to hover your mouse cursor over your MacBook's notch (or your screen bezel) to launch your workspace.`,
    highlight: "Your control center is now ready at the top of your screen."
  },
  {
    step: "05",
    icon: DollarSign,
    title: "Configure Revenue Dashboards",
    description: `To view live earnings in your notch, connect your payment gateways (Stripe, Dodo Payments, or Lemon Squeezy). Paste your read-only API keys in the revenue settings. Your financial data stays 100% local and secure on your Mac.`,
    highlight: "Real-time MRR and sales tracking without opening dashboards."
  },
  {
    step: "06",
    icon: BarChart3,
    title: "Configure Analytics & System Stats",
    description: `Separately, set up your analytics (Google Analytics, Plausible, Fathom) and system stats (CPU, RAM, Network speeds) in the preferences panel. Toggle individual tools on or off depending on what you want visible in your notch.`,
    highlight: "Modular design—turn off what you don't use."
  },
  {
    step: "07",
    icon: Power,
    title: "How to Quit NotchLedge",
    description: `Whenever you need to close or exit the app completely, simply access the app settings menu from your notch or menu bar and click 'Quit NotchLedge'. This safely shuts down all background processes and hides the simulated notch instantly.`,
    highlight: "You can relaunch it anytime from your Applications folder."
  }
];

export default function HowToUsePage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50 dark:bg-[#030303] transition-colors duration-500 min-h-screen">
        
        {/* Header Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-gray-200 dark:border-white/10">
          <Container className="text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full border border-purple-200 bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 text-xs font-semibold tracking-widest text-purple-700 dark:text-purple-300 uppercase">
              Master Guide
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-slate-900 dark:text-white text-balance max-w-3xl mx-auto tracking-tight transition-colors">
              How to use {product.name}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed transition-colors">
              From unzipping your email delivery to setting up your live revenue, system stats, and safely quitting — your complete setup manual.
            </p>
          </Container>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <Container className="max-w-3xl">
            <ol className="space-y-12">
              {steps.map((item) => {
                const Icon = item.icon;
                return (
                  <li 
                    key={item.step} 
                    className="relative bg-white dark:bg-[#080808] border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-sm dark:shadow-none transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between md:flex-col shrink-0">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 font-display font-bold text-purple-700 dark:text-purple-400 text-lg shadow-sm">
                          {item.step}
                        </span>
                        <div className="md:mt-4 text-slate-400 dark:text-gray-600">
                          <Icon size={24} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white mb-3 transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-4 transition-colors">
                          {item.description}
                        </p>
                        
                        {/* Highlight / Pro Tip Box */}
                        <div className="inline-block bg-slate-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-2 text-xs font-medium text-slate-700 dark:text-gray-300 transition-colors">
                          💡 <span className="font-semibold text-purple-600 dark:text-purple-400">Pro Tip:</span> {item.highlight}
                        </div>
                      </div>

                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Bottom Call to Action Box */}
            <div className="mt-20 rounded-3xl border border-purple-200 dark:border-purple-500/30 bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/20 dark:to-[#080808] p-8 md:p-12 text-center shadow-xl transition-colors">
              <h2 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white transition-colors">
                Ready to transform your Mac menu bar?
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600 dark:text-gray-400 transition-colors">
                One-time payment of {product.pricing.price}. Lifetime access & all future updates included.
              </p>
              
              <a
                href="https://test.checkout.dodopayments.com/buy/pdt_0No48XLZ8cj3sv8CrMVTj?quantity=1"
                className="mt-8 inline-block rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Get {product.name} Now
              </a>

              <p className="mt-6 text-xs text-slate-500 dark:text-gray-500">
                Have questions about setup? Read our{" "}
                <Link href="/#faq" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-semibold underline underline-offset-4">
                  FAQ section
                </Link>
                .
              </p>
            </div>

          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}