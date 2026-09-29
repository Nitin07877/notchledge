"use client";

import { useEffect, useState } from "react";
import { tools } from "@/config/product";
import { toolIcons } from "@/components/toolIcons";
import { MacFrame } from "@/components/MacFrame";

const featured = ["home", "message", "revenue", "weather", "systemstats"];

export function ScreenshotShow() {
  const shown = tools.filter((t) => featured.includes(t.id));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % shown.length), 3200);
    return () => clearInterval(t);
  }, [shown.length]);

  // अगर tools एरे लोड नहीं हुआ है तो क्रैश से बचने के लिए
  if (!shown || shown.length === 0) return null;

  const tool = shown[active];

  return (
    <div className="mx-auto mt-16 max-w-xl relative group">
      
      {/* 🔮 Awesome Background Glow behind the MacFrame (Premium Vibe) */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

      {/* 💻 Inner Frame with drop shadow */}
      <div className="relative z-10 drop-shadow-2xl">
        <MacFrame>
          {/* 
            🚀 FIX: Added h-auto, object-contain and object-top 
            ताकि ऊपर का नॉच बिल्कुल न कटे और इमेज पूरी दिखे।
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={tool.image} 
            alt={`${tool.name} in NotchLedge`} 
            className="w-full h-auto object-contain object-top" 
          />
        </MacFrame>
      </div>
      
      {/* 🚀 Interactive Tool Selector Buttons (Light/Dark Mode Optimized) */}
      <div className="mt-8 flex items-center justify-center gap-2 relative z-10">
        {shown.map((t, i) => {
          const Icon = toolIcons[t.id];
          const on = i === active;
          return (
            <button
              key={t.id}
              aria-label={t.name}
              aria-pressed={on}
              onClick={() => setActive(i)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-300 ${
                on 
                  ? "border-violet-500 bg-violet-100 text-violet-700 dark:border-violet-400 dark:bg-violet-500/20 dark:text-violet-300 scale-110 shadow-md" 
                  : "border-gray-200 bg-white text-slate-500 hover:border-purple-300 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-gray-400 dark:hover:border-violet-500/40"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500 dark:text-gray-500 transition-colors relative z-10">
        Real screens from the app · <span className="font-semibold text-slate-700 dark:text-gray-300">{tool.name}</span>
      </p>
    </div>
  );
}