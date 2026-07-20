"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap, ScrollTrigger, initGSAP } from "@/lib/gsap";


export default function useProjectScroll(
container: RefObject<HTMLDivElement | null>,
image: RefObject<HTMLDivElement | null>
){

useLayoutEffect(()=>{


initGSAP();


if(!container.current || !image.current)
return;


const ctx = gsap.context(()=>{


gsap.to(image.current,{
scale:1.08,
ease:"none",

scrollTrigger:{
trigger:container.current,

start:"top top",

end:"bottom top",

scrub:true,
markers: false,

}
});


},container);



return ()=>ctx.revert();


},[])

}