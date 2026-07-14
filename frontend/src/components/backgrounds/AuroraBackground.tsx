"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">

      {/* Blue glow */}
      <motion.div
        className="
          absolute
          top-[-20%]
          left-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/30
          blur-[120px]
        "
        animate={{
          x: [0, 120, -40, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Violet glow */}
      <motion.div
        className="
          absolute
          right-[-10%]
          top-[20%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/20
          blur-[140px]
        "
        animate={{
          x: [0, -100, 40, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Cyan glow */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          left-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400/20
          blur-[130px]
        "
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* Noise layer */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[url('/noise.webp')]
        "
      />

    </div>
  );
}