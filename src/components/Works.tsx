"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const projects = [
    {
        slug: "equipment-management",
        title: "建設機材管理アプリ",
        description: "車両・機材をQRで一元管理。探す時間をゼロに。",
        tags: ["Rapid Prototyping", "QR Code"],
        color: "#FFB800",
    },
    {
        slug: "tree-inventory",
        title: "樹木在庫管理アプリ",
        description: "2万本の樹木をスマホで即検索。在庫が見える化。",
        tags: ["Next.js", "Supabase", "PWA"],
        color: "#4CAF50",
    },
    {
        slug: "document-check",
        title: "顧客書類チェックアプリ",
        description: "4万件超のデータを0.3秒で検索。スプシ地獄から解放。",
        tags: ["Next.js", "Supabase"],
        color: "#2196F3",
    },
    {
        slug: "invoice-automation",
        title: "請求書自動化システム",
        description: "転記ゼロ、年64万円削減。PDF自動生成。",
        tags: ["GAS", "Webアプリ"],
        color: "#9C27B0",
    },
    {
        slug: "expense-bot",
        title: "経費精算Bot",
        description: "レシート投げるだけで仕訳完了。AIが自動分類。",
        tags: ["Python", "Discord", "Gemini"],
        color: "#00BCD4",
    },
    {
        slug: "sales-report",
        title: "営業報告アプリ",
        description: "スマホPIN入力で報告完結。入金漏れも自動通知。",
        tags: ["GAS", "Webアプリ"],
        color: "#FF5722",
    },
];

export default function Works() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="works"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <Link key={project.slug} href={`/works/${project.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 1.0, delay: index * 0.15 }}
                            className="group bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#222] transition-all duration-300 border border-white/10 hover:border-opacity-50 cursor-pointer h-full"
                            style={{
                                ["--hover-color" as string]: project.color,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = project.color;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            }}
                        >
                            <h3
                                className="text-xl font-bold text-white mb-3 group-hover:transition-colors"
                                style={{
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = project.color;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "white";
                                }}
                            >
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
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
                    </Link>
                ))}
            </div>
        </section>
    );
}
