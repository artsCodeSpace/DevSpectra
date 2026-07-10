"use client";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import {
selectedProjects, recentProjects
} from "@/data/projects";


export default function Projects(){


return (

<main
className="
relative
overflow-hidden
bg-[#050816]
text-white
"
>


<section
className="
relative
min-h-screen
flex
items-center
justify-center
px-6
"
>

<div
className="
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
Our Work
</p>


<h1
className="
mt-8
text-6xl
md:text-8xl
font-semibold
leading-[0.95]
tracking-tight
"
>
Digital products
<br/>

<span
className="
text-slate-400
"
>
built with purpose
</span>

</h1>


<p
className="
mt-8
mx-auto
max-w-xl
text-lg
text-slate-400
"
>
A collection of websites, platforms and
digital experiences engineered by DevSpectra.
</p>


</div>


<ScrollIndicator />

</section>



{

selectedProjects.map(
(project,index)=>(

<ProjectShowcase

key={project.title}

project={project}

index={index}

/>

)

)

}

<section
className="
relative
py-32
text-center
"
>

<p className="
text-violet-400
uppercase
tracking-widest
text-sm
">
More Work
</p>

<h2
className="
mt-4
text-5xl
font-bold
"
>
Recent Projects
</h2>

</section>

{
recentProjects.map(
(project,index)=>(

<ProjectShowcase

key={project.title}

project={{
  ...project,
  type: project.category,
  tags:[
    project.category
  ]
}}

index={index + selectedProjects.length}

/>

)
)
}



</main>

)

}