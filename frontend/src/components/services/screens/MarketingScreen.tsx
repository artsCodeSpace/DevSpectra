import { useState, useEffect } from "react";
import { TrendingUp, Users, MousePointerClick } from "lucide-react";

const CHANNELS = ["Organic", "Paid", "Social", "Email"];

export function MarketingScreen() {
  const [channel, setChannel] = useState(0);
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const seed = channel + 1;
    setBars(Array.from({ length: 7 }, (_, i) => 30 + ((i * 13 + seed * 27) % 60)));
  }, [channel]);

  const metrics = [
    { icon: Users, label: "Visitors", value: `${(12.4 + channel * 3.1).toFixed(1)}k`, delta: "+18%" },
    { icon: MousePointerClick, label: "CTR", value: `${(3.2 + channel * 0.4).toFixed(1)}%`, delta: "+6%" },
    { icon: TrendingUp, label: "Conv.", value: `${(2.1 + channel * 0.3).toFixed(1)}%`, delta: "+11%" },
  ];

  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-12 text-white">
      <div className="mb-3 mt-2 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">Analytics</div>
          <div className="text-sm font-semibold">Growth</div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400">
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>

      <div className="mb-3 flex gap-1 overflow-hidden rounded-lg bg-white/5 p-1">
        {CHANNELS.map((c, i) => (
          <button
            key={c}
            onClick={() => setChannel(i)}
            className={`flex-1 rounded-md py-1.5 text-[10px] transition ${channel === i ? "bg-white/15" : "text-white/60"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mb-3 rounded-xl bg-white/5 p-3">
        <div className="mb-2 text-[10px] text-white/50">Last 7 days</div>
        <div className="flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/50 to-cyan-400 transition-all duration-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/20">
              <m.icon className="h-3.5 w-3.5 text-emerald-300" />
            </div>
            <div className="flex-1 text-[11px] text-white/70">{m.label}</div>
            <div className="text-[11px] font-bold">{m.value}</div>
            <div className="text-[10px] text-emerald-400">{m.delta}</div>
          </div>
        ))}
      </div>

      <button className="mt-auto rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 py-2.5 text-[11px] font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition active:scale-95">
        View full report
      </button>
    </div>
  );
}
