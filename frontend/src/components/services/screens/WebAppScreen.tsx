import { useState } from "react";
import { Activity, Zap, Gauge } from "lucide-react";

export function WebAppScreen() {
  const [tab, setTab] = useState<"perf" | "code">("perf");
  const [deployed, setDeployed] = useState(false);

  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-12 text-xs text-white">
      <div className="mb-3 mt-2 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">Project</div>
          <div className="text-sm font-semibold">acme-app</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <Zap className="h-4 w-4" />
        </div>
      </div>

      <div className="mb-3 flex gap-1 rounded-lg bg-white/5 p-1">
        <button
          onClick={() => setTab("perf")}
          className={`flex-1 rounded-md py-1.5 text-[11px] transition ${tab === "perf" ? "bg-white/15 text-white" : "text-white/60"}`}
        >
          Metrics
        </button>
        <button
          onClick={() => setTab("code")}
          className={`flex-1 rounded-md py-1.5 text-[11px] transition ${tab === "code" ? "bg-white/15 text-white" : "text-white/60"}`}
        >
          Build
        </button>
      </div>

      {tab === "perf" ? (
        <div className="space-y-2 animate-fade-in">
          {[
            { label: "Performance", value: 98, icon: Gauge },
            { label: "SEO", value: 100, icon: Activity },
            { label: "Accessibility", value: 96, icon: Zap },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-white/5 p-2.5">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <m.icon className="h-3 w-3 text-violet-300" />
                  <span className="text-[11px]">{m.label}</span>
                </div>
                <span className="font-bold">{m.value}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-700"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="animate-fade-in rounded-lg bg-black/60 p-3 font-mono text-[10px] leading-relaxed text-white/80">
          <div className="text-emerald-400">$ bun run build</div>
          <div className="text-white/50">▲ compiling…</div>
          <div className="text-violet-300">✓ 42 routes prerendered</div>
          <div className="text-cyan-300">✓ 128 kB gzipped</div>
          <div className="text-emerald-400">✓ ready in 3.4s</div>
        </div>
      )}

      <button
        onClick={() => setDeployed((v) => !v)}
        className="mt-auto rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2.5 text-[11px] font-semibold shadow-lg shadow-violet-500/30 transition active:scale-95"
      >
        {deployed ? "✓ Deployed" : "Deploy to Edge"}
      </button>
    </div>
  );
}
