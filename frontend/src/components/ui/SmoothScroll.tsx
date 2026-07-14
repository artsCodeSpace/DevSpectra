"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initGSAP } from "@/lib/gsap";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({
  children,
}: Props) {

  useEffect(() => {

    initGSAP();

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });


    lenis.on("scroll", ScrollTrigger.update);


    const raf = (time:number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
      ScrollTrigger.refresh()
    };


    requestAnimationFrame(raf);


    return () => {
      lenis.destroy();
    };


  }, []);


  return children;
}