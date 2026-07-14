"use client";

import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function ProjectsHero() {
  return (
    <section
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      px-6
      "
    >
      {/* Background */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,#6D28D955,transparent_60%)]
        "
      />

      <div
        className="
        relative
        z-10
        mx-auto
        max-w-5xl
        text-center
        "
      >
        <p
          className="
          text-sm
          uppercase
          tracking-[0.4em]
          text-violet-400
          "
        >
          OUR WORK
        </p>

        <h1
          className="
          mt-8
          text-6xl
          font-bold
          leading-[0.9]
          tracking-tight
          md:text-8xl
          "
        >
          Digital Products
          <br />
          <span className="text-slate-400">
            Built with Purpose
          </span>
        </h1>

        <p
          className="
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          text-slate-400
          "
        >
          Premium web experiences crafted with modern technologies,
          thoughtful interaction design, and engineering precision.
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
}