"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";


interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}


export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
}: ScrollRevealProps) {
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        filter: "blur(10px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}