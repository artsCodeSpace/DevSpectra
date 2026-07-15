/*import HeroSection from "@/components/sections/HeroSection";


export default function Home(){

  return (
    <main>
      <HeroSection />
    </main>
  );
} */
"use client";
import { motion } from "framer-motion";
import { MorphoTextFlip } from "@/components/ui/morphotextflip";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100svh-5rem)] overflow-hidden bg-[#030712] text-white px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 sm:w-96 sm:h-96 lg:w-128 lg:h-128 bg-purple-500/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 sm:w-96 sm:h-96 lg:w-128 lg:h-128 bg-blue-500/40 rounded-full blur-[120px]" />
      </div>
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 space-y-6 sm:space-y-8 text-center space-y-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
          ✦ Engineering Studio
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl leading-tight font-bold leading-tight">
          Building
          <br />

          <span className="bg-linear-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            digital experiences
          </span>

          <br />

          people remember.
        </h1>
        
        <div className="flex flex-col items-center gap-2 text-xl md:text-2xl">

          <p className="text-slate-400">
            We build
          </p>
          <MorphoTextFlip 
            words={["modern digital products", "responsive websites", "progressive web apps", "cloud-native solutions"]} 
            animationType="slideUp"
            textClassName="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            bg-linear-to-br
            from-[#0f172a]
            via-[#111827]
            to-[#020617]
            bg-clip-text
            text-transparent"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto px-2"
        >
          Helping businesses launch high-performance
web applications and websites that drive growth and engagement.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-semibold hover:bg-slate-200 transition-colors">
            Get started
          </button>
          
          <Link
            href="/projects"
            className="
              px-8
              py-3
              border
              border-slate-700
              rounded-full
              font-semibold
              text-white
              hover:bg-slate-800
              transition-colors
            "
          >
            View Projects
          </Link>

        </motion.div>
      </div>
    </section>
  );
}