"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "1級土木施工管理技士 / 2級造園施工管理技士", category: "国家資格" },
    { name: "AppSheet", category: "No-Code" },
    { name: "Google Apps Script", category: "Automation" },
    { name: "Next.js", category: "Web Framework" },
    { name: "Supabase", category: "Database" },
    { name: "Python", category: "Backend" },
    { name: "n8n", category: "Workflow" },
    { name: "Obsidian", category: "Knowledge" },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] px-6 py-24"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-16"
            >
                Skills
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group relative border border-white/20 rounded-lg p-6 hover:border-[#00D4FF] transition-colors duration-300"
                    >
                        <p className="text-lg font-semibold text-white group-hover:text-[#00D4FF] transition-colors">
                            {skill.name}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{skill.category}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
