"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Tagline */}
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            現場を、変える。
          </h1>
          <p className="mt-4 text-lg text-gray-300 md:text-xl">
            Construction × AI Efficiency Specialist
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 scroll-indicator"
        >
          <svg
            className="h-8 w-8 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Vertical Side Text (GO Inc style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <p
          className="text-sm tracking-widest text-white/60"
          style={{ writingMode: "vertical-rl" }}
        >
          GENBALINK — 建設 × AI
        </p>
      </motion.div>
    </section>
  );
}
