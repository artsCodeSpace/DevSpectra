"use client";

import { motion } from "framer-motion";


export default function GlowOrb() {

  return (
    <div
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        pointer-events-none
      "
    >

      {/* Outer glow */}

      <motion.div

        animate={{
          scale:[1,1.15,1],
          opacity:[0.4,0.7,0.4],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:"easeInOut"
        }}

        className="
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "

      />



      {/* Core */}

      <motion.div

        animate={{
          rotate:360,
        }}

        transition={{
          duration:30,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          relative
          h-[280px]
          w-[280px]
          rounded-full
          bg-gradient-to-br
          from-cyan-400/30
          via-blue-500/20
          to-purple-500/30
          blur-[1px]
          border
          border-white/10
        "

      >

        <div
          className="
            absolute
            inset-8
            rounded-full
            bg-black/40
            backdrop-blur-xl
          "
        />

      </motion.div>



    </div>
  );
}