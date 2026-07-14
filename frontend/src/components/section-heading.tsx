export default function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</div>}
      <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
    </div>
  );
}
