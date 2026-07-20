"use client";

import { Project } from "@/data/projects";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";
import { useRef } from "react";
import useProjectAnimation from "../../hooks/useProjectAnimation";
import useProjectScroll from "../../hooks/useProjectScroll";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectSlide({ project, index }: Props) {

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const typeRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useProjectAnimation({
      container: containerRef,
      image: imageRef,
      type: typeRef,
      title: titleRef,
      description: descriptionRef,
      tags: tagsRef,
      button: buttonRef,
  });

  useProjectScroll(
    containerRef,
    imageRef
  );

  return (
    <section
      ref={containerRef}
      className="
      project-slide
      relative
      h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      bg-[#050816]
      "
    >
      {/* Background Gradient */}
      <div
        className="
        absolute
        inset-0
        
        bg-gradient-to-br
        from-violet-950/40
        via-[#050816]
        to-black
        "
      />

      {/* Main Layout */}
      <div
        className="
        relative
        z-10
        mx-auto
        grid
        h-full
        w-full
        max-w-7xl
        grid-cols-1
        items-center
        gap-20
        px-8
        md:grid-cols-2
        lg:px-16
        "
      >
        {/* Left Side */}
        <ProjectContent
          project={project}
          typeRef={typeRef}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          tagsRef={tagsRef}
          buttonRef={buttonRef}
        />

        {/* Right Side */}
        <ProjectImage project={project} imageRef={imageRef} />
      </div>
    </section>
  );
}