import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white py-20 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-sm text-slate-500 dark:text-gray-400">Last updated: September 30, 2026</p>
        
        <div className="space-y-6 text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>By accessing or using NotchLedge, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or software.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">2. License & Purchase</h2>
            <p>NotchLedge is offered as a one-time lifetime purchase. Upon successful payment, you are granted a non-exclusive, non-transferable, lifetime license to use the software on your compatible macOS devices.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">3. Refund Policy</h2>
            <p>We offer a 14-day zero-questions money-back guarantee. If you are not satisfied with NotchLedge, you can request a full refund within 14 days of your original purchase by contacting our support.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">4. Contact Information</h2>
            <p>For any inquiries regarding these terms, please reach out via email at <a href="mailto:fasttech7010@gmail.com" className="text-purple-600 dark:text-purple-400 underline">fasttech7010@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}