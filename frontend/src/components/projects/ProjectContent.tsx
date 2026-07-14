"use client";

import { Project } from "@/data/projects";
import TechChips from "./TechChips";
import CTAButton from "./CTAButton";
import { RefObject, useRef } from "react";

interface Props {
  project: Project;

  typeRef: RefObject<HTMLParagraphElement | null>;
  titleRef: RefObject<HTMLHeadingElement | null>;
  descriptionRef: RefObject<HTMLParagraphElement | null>;
  tagsRef: RefObject<HTMLDivElement | null>;
  buttonRef: RefObject<HTMLDivElement | null>;
}

export default function ProjectContent({
  project,
  typeRef,
  titleRef,
  descriptionRef,
  tagsRef,
  buttonRef,
}: Props) {
  return (
    <div
      className="
      flex
      flex-col
      justify-center
      "
    >
      {/* Project Type */}
      <p
        ref={typeRef}
        className="
        text-sm
        uppercase
        tracking-[0.35em]
        text-violet-400
        "
      >
        {project.type}
      </p>

      {/* Title */}
      <h2
        ref={titleRef}
        className="
        mt-6
        text-5xl
        font-bold
        leading-tight
        md:text-7xl
        "
      >
        {project.title}
      </h2>

      {/* Description */}
      <p
        ref={descriptionRef}
        className="
        mt-8
        max-w-xl
        text-lg
        leading-relaxed
        text-slate-400
        "
      >
        {project.description}
      </p>

      {/* Technologies */}
      <div ref={tagsRef} className="mt-10">
        <TechChips tags={project.tags} />
      </div>

      {/* CTA */}
      <div ref={buttonRef} className="mt-12">
        <CTAButton />
      </div>
    </div>
  );
}