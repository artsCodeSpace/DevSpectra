"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="
        absolute
        bottom-12
        flex
        flex-col
        items-center
        gap-3
        text-sm
        text-slate-400
      "
    >
      <span>Scroll</span>

      <div
        className="
          h-10
          w-px
          bg-gradient-to-b
          from-slate-400
          to-transparent
        "
      />
    </motion.div>
  );
}