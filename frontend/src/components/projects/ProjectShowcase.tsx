"use client";

import Image from "next/image";
import { motion } from "framer-motion";


type Project = {
	title: string;
	type: string;
	description: string;
	tags: string[];
	image: string;
};

export default function ProjectShowcase({
	project,
	index
}:{
	project: Project;
	index: number;
}){


return (

<section
className="
min-h-screen
flex
items-center
py-32
"
>


<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-20
px-6
"
>


{/* Text */}

<motion.div

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true,
margin:"-100px"
}}

transition={{
duration:0.8
}}

>


<p className="
text-violet-400
tracking-widest
uppercase
text-sm
">

0{index+1}

</p>



<h2
className="
mt-5
text-5xl
md:text-6xl
font-bold
"
>

{project.title}

</h2>



<p
className="
mt-4
text-xl
text-slate-400
"
>

{project.type}

</p>



<p
className="
mt-8
max-w-md
text-slate-300
leading-relaxed
"
>

{project.description}

</p>



<div
className="
mt-8
flex
flex-wrap
gap-3
"
>

{
project.tags.map((tag:string)=>(

<span
key={tag}
className="
px-4
py-2
rounded-full

bg-white/5

border
border-white/10

text-sm
"
>
{tag}
</span>

))
}

</div>



</motion.div>



{/* Image */}


<motion.div

initial={{
opacity:0,
scale:.9,
y:50
}}

whileInView={{
opacity:1,
scale:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

className="
relative
group
"

>


<div
className="
absolute
inset-0
bg-violet-500/20
blur-[100px]
opacity-0
group-hover:opacity-100
transition
"
/>



<div
className="
relative
aspect-video
overflow-hidden
rounded-3xl

border
border-white/10

bg-white/5

"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover

transition-transform
duration-700

group-hover:scale-105
"

/>


</div>


</motion.div>


</div>


</section>

)

}