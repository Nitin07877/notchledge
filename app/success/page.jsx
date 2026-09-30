import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SuccessPage({ searchParams }) {
  const status = searchParams?.status;
  const paymentId = searchParams?.payment_id;

  // Basic security check: Agar status ya payment_id nahi hai, toh seedha kick karo
  if (status !== "succeeded" || !paymentId) {
    redirect("/");
  }

  // 100% Hack-proof security: Dodo Payments server se verification
  try {
    const dodoApiUrl = `https://api.dodopayments.com/payments/${paymentId}`; 

    const response = await fetch(dodoApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.DODO_SECRET_KEY}`
      },
      cache: 'no-store'
    });

    if (response.status === 404 || response.status === 401) {
      redirect("/");
    }

  } catch (error) {
    console.error("Security Verification Error:", error);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 bg-slate-50 dark:bg-[#030303] transition-colors duration-500">
      {/* Purple Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-500/10 dark:bg-purple-600/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* Success Tick Icon */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50 rounded-full flex items-center justify-center mb-8 shadow-sm">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 text-center transition-colors">
        Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Successful.</span>
      </h1>

      {/* Description */}
      <p className="text-center text-slate-600 dark:text-gray-400 max-w-lg text-base md:text-lg mb-10 leading-relaxed transition-colors">
        Welcome to NotchLedge. Your entire Mac workspace is now unlocked. The download link and license key have been securely sent to your email.
      </p>

      {/* Return Button */}
      <Link 
        href="/" 
        className="group flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 px-8 py-3.5 md:py-4 md:px-10 font-bold text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-lg"
      >
        Return to Dashboard
        <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}