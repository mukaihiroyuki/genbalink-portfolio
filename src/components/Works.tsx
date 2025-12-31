"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "キメラの卵",
        description: "建設機材管理アプリ。QRコードで機材をトラッキング。",
        tags: ["Next.js", "Supabase", "Vercel"],
    },
    {
        title: "営業報告自動化",
        description: "営業チームの報告業務を自動化するシステム。",
        tags: ["GAS", "AppSheet", "Googleスプレッドシート"],
    },
    {
        title: "櫻井清掃管理",
        description: "清掃作業報告をスマホから簡単に。Notion連携。",
        tags: ["React", "Supabase", "Notion API"],
    },
];

export default function Works() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center bg-[#111] px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-16"
            >
                Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 1.0, delay: index * 0.3 }}
                        className="group bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#222] transition-colors duration-300 border border-white/10 hover:border-[#00D4FF]/50"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
