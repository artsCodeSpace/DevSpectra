"use client";

import {
  RefObject,
  useLayoutEffect,
} from "react";

import {
  gsap,
  ScrollTrigger,
  initGSAP,
} from "@/lib/gsap";


export default function usePinnedProjects(
  container: RefObject<HTMLDivElement | null>
) {

  useLayoutEffect(() => {

    initGSAP();


    console.log(
      "PINNING INITIALIZED"
    );


    const element = container.current;


    console.log(
      "container:",
      element
    );


    if (!element) return;


    const slides =
      element.querySelectorAll(
        ".project-slide"
      );


    console.log(
      "slides:",
      slides.length
    );


    const ctx = gsap.context(() => {


      slides.forEach((slide) => {


        ScrollTrigger.create({

          trigger: slide,

          start: "top top",

          end: "bottom top",

          pin: true,

          pinSpacing: false,

          markers: false,


        });


      });


      ScrollTrigger.refresh();


    }, element);


    return () => ctx.revert();


  }, []);

}