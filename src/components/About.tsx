"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const lines = [
        "悲観は気分、楽観は意思。",
        "現場を知っている。",
        "課題を見つけて、仕組みで解決できる。",
        "だから、変えられる。",
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6 py-24"
        >
            <div className="max-w-4xl">
                {lines.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 1.2, delay: index * 0.5 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        {line}
                    </motion.p>
                ))}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1.2, delay: lines.length * 0.5 + 0.8 }}
                    className="mt-12"
                >
                    <p className="text-xl text-gray-400 leading-relaxed">
                        1級施工管理技士として現場を歩いてきた経験と、
                        <br className="hidden md:block" />
                        スプレッドシート地獄を解決する技術力で、業務効率化を推進します。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
