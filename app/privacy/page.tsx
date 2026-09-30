import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white py-20 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-slate-500 dark:text-gray-400">Last updated: September 30, 2026</p>
        
        <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Introduction</h2>
            <p>Welcome to NotchLedge. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our macOS application.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <p>When you make a purchase via our payment gateway (Dodo Payments), we collect necessary billing and contact information such as your email address to deliver your license key and download links. All payment transactions are securely processed by Dodo Payments; we do not store your credit card details.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Local Data Storage</h2>
            <p>NotchLedge operates primarily locally on your macOS device. Your configuration settings, preferences, and API keys are stored locally on your machine and are never transmitted to our servers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:fasttech7010@gmail.com" className="text-purple-600 dark:text-purple-400 underline">fasttech7010@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}