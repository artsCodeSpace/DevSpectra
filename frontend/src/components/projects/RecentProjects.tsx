"use client";

import { recentProjects } from "@/data/projects";
import ProjectSlide from "./ProjectSlide";

export default function RecentProjects() {
  return (
    <>
      <section
        className="
        relative z-50 
        bg-[#050816]
        py-40
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
          More Work
        </p>

        <h2
          className="
          mt-5
          text-5xl
          font-bold
          "
        >
          Recent Projects
        </h2>
      </section>

      {recentProjects.map((project, index) => (
        <ProjectSlide
          key={project.title}
          project={project}
          index={index}
        />
      ))}
    </>
  );
}