"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap, initGSAP } from "@/lib/gsap";

interface AnimationRefs {
  container: RefObject<HTMLDivElement | null>;
  image: RefObject<HTMLDivElement | null>;
  type: RefObject<HTMLParagraphElement | null>;
  title: RefObject<HTMLHeadingElement | null>;
  description: RefObject<HTMLParagraphElement | null>;
  tags: RefObject<HTMLDivElement | null>;
  button: RefObject<HTMLDivElement | null>;
}

export default function useProjectAnimation({
  container,
  image,
  type,
  title,
  description,
  tags,
  button,
}: AnimationRefs) {
  useLayoutEffect(() => {
    console.log("Project animation mounted");
    initGSAP();

    if (
      !container.current ||
      !image.current ||
      !type.current ||
      !title.current ||
      !description.current ||
      !tags.current ||
      !button.current
    ) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(image.current, {
        scale: 1.15,
        opacity: 0,
        duration: 1.2,
      })

        .from(
          type.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.7"
        )

        .from(
          title.current,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )

        .from(
          description.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )

        .from(
          tags.current?.children ?? [],
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.35,
          },
          "-=0.3"
        )

        .from(
          button.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
    }, container);
  
    return () => ctx.revert();
  }, []);
}
