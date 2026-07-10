import { ReactNode } from "react";

export default function BentoCard({
  title, body, span = "", tone = "default", footer,
}: { title: string; body: string; span?: string; tone?: "default" | "accent" | "ink"; footer?: ReactNode }) {
  const toneClass =
    tone === "accent" ? "bg-accent text-white border-accent" :
    tone === "ink" ? "bg-ink text-bg border-ink" :
    "bg-surface text-ink border-line";
  return (
    <div className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 transition hover:-translate-y-0.5 ${toneClass} ${span}`}>
      <div>
        <h3 className="font-serif text-2xl leading-tight md:text-3xl">{title}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${tone === "default" ? "text-muted" : "opacity-80"}`}>{body}</p>
      </div>
      {footer && <div className="mt-8 text-xs uppercase tracking-widest opacity-80">{footer}</div>}
    </div>
  );
}
