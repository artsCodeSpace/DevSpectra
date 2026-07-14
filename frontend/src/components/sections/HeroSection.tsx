"use client";

import GlowOrb from "@/components/sections/hero/GlowOrb";
import FloatingCard from "@/components/sections/hero/FloatingCard";


export default function HeroSection(){

return (

<section
className="
relative
min-h-screen
overflow-hidden
flex
items-center
justify-center
text-white
"
>


<GlowOrb/>


<FloatingCard
className="
left-[10%]
top-[25%]
p-5
"
delay={0}
>

<p className="text-xs text-gray-400">
SYSTEM STATUS
</p>

<p className="mt-2 text-xl">
● ONLINE
</p>

</FloatingCard>



<FloatingCard
className="
right-[12%]
top-[30%]
p-5
"
delay={1}
>

<p className="text-xs text-gray-400">
STACK
</p>

<p className="mt-2">
NEXT.JS
</p>

<p>
NODE
</p>

</FloatingCard>



<div className="
relative
z-10
text-center
">

<h1
className="
text-8xl
font-bold
tracking-tighter
"
>
DEV
<br/>
SPECTRA
</h1>


</div>


</section>

)

}