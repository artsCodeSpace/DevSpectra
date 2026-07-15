import type { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 300, height: 610 }}>
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] blur-3xl opacity-60"
        style={{ background: "var(--gradient-primary)" }}
      />
      {/* Outer frame */}
      <div className="relative h-full w-full rounded-[2.75rem] bg-gradient-to-b from-white/10 to-white/5 p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="relative h-full w-full rounded-[2.6rem] bg-[oklch(0.09_0.02_270)] p-2">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-[oklch(0.11_0.02_270)]">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-20 flex h-6 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[oklch(0.4_0.05_270)]" />
              <div className="h-2 w-2 rounded-full bg-[oklch(0.3_0.05_270)]" />
            </div>
            {/* Side buttons */}
            <div className="absolute -left-[6px] top-24 h-8 w-1 rounded-l bg-white/10" />
            <div className="absolute -left-[6px] top-36 h-12 w-1 rounded-l bg-white/10" />
            <div className="absolute -left-[6px] top-52 h-12 w-1 rounded-l bg-white/10" />
            <div className="absolute -right-[6px] top-32 h-16 w-1 rounded-r bg-white/10" />
            {/* Content */}
            <div className="relative h-full w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
