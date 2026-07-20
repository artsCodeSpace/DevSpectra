"use client";

import { useRef } from "react";
import { Project } from "@/data/projects";
import ProjectSlide from "./ProjectSlide";
import usePinnedProjects from "../../hooks/usePinnedProjects";

interface Props {
  projects: Project[];
}

export default function PinnedProjects({
  projects,
}: Props) {

  const sectionRef = useRef<HTMLDivElement>(null);


  usePinnedProjects(sectionRef);


  return (
    <section
      ref={sectionRef}
      className="relative"
    >

      {projects.map((project, index) => (
        <ProjectSlide
          key={project.title}
          project={project}
          index={index}
        />
      ))}

    </section>
  );
}