"use client";

import { ArrowRight } from "lucide-react";

export default function CTAButton() {
  return (
    <button
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-violet-500
      px-7
      py-4
      text-sm
      font-medium
      transition-all
      duration-300
      hover:bg-violet-500
      "
    >
      Explore Project

      <ArrowRight
        className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
        "
      />
    </button>
  );
}