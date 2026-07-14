import  ProjectsHero from "@/components/projects/ProjectsHero";
import PinnedProjects from "@/components/projects/PinnedProjects";
import RecentProjects from "@/components/projects/RecentProjects";
import { selectedProjects }  from "@/data/projects";


export default function Projects() {
  return (
    <main>
      <ProjectsHero/>
      <PinnedProjects
          projects={selectedProjects}
      />
      <RecentProjects/>
    </main>
  )
}