"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { RefObject, useRef } from "react";

interface Props {
  project: Project;
  imageRef:RefObject<HTMLDivElement | null>;
}

export default function ProjectImage({ project, imageRef }: Props) {
  
  return (
    <div
      className="
      relative
      flex
      items-center
      justify-center
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        h-[420px]
        w-[420px]
        rounded-full
        bg-violet-600/20
        blur-[120px]
        "
      />

      {/* Image Container */}
      <div
        ref={imageRef}
        className="
        group
        relative
        aspect-[16/10]
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        shadow-2xl
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-transparent
          to-transparent
          "
        />
      </div>
    </div>
  );
}