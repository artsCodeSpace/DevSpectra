"use client";

interface Props {
  tags: string[];
}

export default function TechChips({
  tags,
}: Props) {
  return (
    <div
      className="
      flex
      flex-wrap
      gap-3
      "
    >
      {tags.map((tag) => (
        <span
          key={tag}
          className="
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-slate-300
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-violet-500
          hover:bg-violet-500/10
          hover:text-white
          "
        >
          {tag}
        </span>
      ))}
    </div>
  );
}