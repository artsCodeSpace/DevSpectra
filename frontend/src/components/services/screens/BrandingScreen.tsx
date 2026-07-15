import { useState } from "react";

const PALETTES = [
  { name: "Aurora", colors: ["#7c3aed", "#ec4899", "#22d3ee", "#0f172a"] },
  { name: "Sunset", colors: ["#f97316", "#ef4444", "#facc15", "#1c1917"] },
  { name: "Forest", colors: ["#10b981", "#14b8a6", "#84cc16", "#052e16"] },
];

const FONTS = ["Geist", "Inter", "Space Grotesk"];

export function BrandingScreen() {
  const [p, setP] = useState(0);
  const [f, setF] = useState(0);

  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-12 text-white">
      <div className="mb-3 mt-2">
        <div className="text-[10px] uppercase tracking-widest text-white/50">Brand Kit</div>
        <div className="text-sm font-semibold">Live Preview</div>
      </div>

      {/* Preview card */}
      <div
        className="relative mb-3 overflow-hidden rounded-xl p-4"
        style={{
          background: `linear-gradient(135deg, ${PALETTES[p].colors[0]}, ${PALETTES[p].colors[1]})`,
        }}
      >
        <div className="text-[10px] uppercase tracking-widest text-white/70">Your Brand</div>
        <div
          className="mt-1 text-lg font-black leading-tight"
          style={{ fontFamily: FONTS[f] }}
        >
          Design that speaks.
        </div>
        <div className="mt-2 inline-flex rounded-full bg-white/20 px-2 py-0.5 text-[10px] backdrop-blur">
          {FONTS[f]}
        </div>
      </div>

      <div className="mb-2 text-[10px] uppercase tracking-widest text-white/50">Palette</div>
      <div className="mb-3 flex gap-1.5">
        {PALETTES.map((pal, i) => (
          <button
            key={pal.name}
            onClick={() => setP(i)}
            className={`flex-1 rounded-lg border p-1.5 transition ${p === i ? "border-white/60 bg-white/10" : "border-white/10"}`}
          >
            <div className="mb-1 flex gap-0.5">
              {pal.colors.slice(0, 3).map((c) => (
                <div key={c} className="h-3 flex-1 rounded-sm" style={{ background: c }} />
              ))}
            </div>
            <div className="text-[9px] text-white/70">{pal.name}</div>
          </button>
        ))}
      </div>

      <div className="mb-2 text-[10px] uppercase tracking-widest text-white/50">Typography</div>
      <div className="flex gap-1.5">
        {FONTS.map((font, i) => (
          <button
            key={font}
            onClick={() => setF(i)}
            className={`flex-1 rounded-lg border py-2 text-[10px] transition ${f === i ? "border-white/60 bg-white/10" : "border-white/10"}`}
            style={{ fontFamily: font }}
          >
            Aa
            <div className="text-[8px] text-white/50">{font.split(" ")[0]}</div>
          </button>
        ))}
      </div>

      <button className="mt-auto rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 py-2.5 text-[11px] font-semibold shadow-lg shadow-cyan-500/30 transition active:scale-95">
        Export brand kit
      </button>
    </div>
  );
}
