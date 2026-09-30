"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

// यह मेन UI और लॉजिक वाला कम्पोनेंट है
function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // क्लाइंट साइड पर URL पैरामीटर्स चेक करना
    const status = searchParams.get("status");
    const paymentId = searchParams.get("payment_id");

    // अगर पेमेंट सक्सेसफुल नहीं है या पेमेंट ID नहीं है, तो होमपेज पर भेज दो
    if (status !== "succeeded" && !paymentId) {
      router.replace("/");
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* पर्पल ग्लो (Subtle Background Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-purple-500/10 dark:bg-purple-600/15 blur-[100px] md:blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* टिक आइकॉन */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center mb-8 shadow-sm">
        <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* ग्रेडिएंट वाली हेडिंग */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 text-center">
        Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Successful.</span>
      </h1>

      <p className="text-center text-gray-500 dark:text-gray-400 max-w-lg text-base md:text-lg mb-10 leading-relaxed">
        Welcome to NotchLedge. Your entire Mac workspace is now unlocked. The download link and license key have been securely sent to your email.
      </p>

      {/* गोल (Pill-shaped) बटन */}
      <Link 
        href="/" 
        className="group flex items-center justify-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3.5 md:py-4 md:px-10 font-medium text-sm md:text-base transition-transform hover:scale-105 active:scale-95"
      >
        Launch Dashboard
        <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}

// Next.js Static Export के लिए useSearchParams को Suspense में रैप करना ज़रूरी है
export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}