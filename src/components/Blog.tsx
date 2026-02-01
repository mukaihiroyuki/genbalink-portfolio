"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="min-h-[60vh] flex flex-col items-center justify-center bg-[#111] px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
                Blog
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-lg mb-10 text-center max-w-md"
            >
                現場DXの実践記録や、業務改善の裏側を発信しています。
            </motion.p>

            <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                    isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                href="https://note.com/genbalink"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#00D4FF] text-[#00D4FF] font-semibold rounded-full hover:bg-[#00D4FF] hover:text-black transition-colors duration-300"
            >
                noteで記事を読む
            </motion.a>
        </section>
    );
}
