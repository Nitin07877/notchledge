import type { ReactNode } from "react";

// A pure-CSS MacBook screen edge with a real notch cutout at the top,
// so screenshots sit inside something that actually looks like a Mac.
export function MacFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-[22px] border border-white/10 bg-[#050507] p-2.5 shadow-2xl shadow-black/60">
      <div className="relative overflow-hidden rounded-[14px] bg-black">
        {/* the notch */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-[22px] w-[132px] -translate-x-1/2 rounded-b-[14px] bg-[#050507]" />
        {children}
      </div>
      {/* screen edge highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/5" />
    </div>
  );
}
