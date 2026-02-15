"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const mainProjects = [
    {
        slug: "daily-report",
        title: "現場日報アプリ",
        description: "紙の日報をゼロに。現場をリアルタイム管理。",
        tags: ["Next.js", "Supabase", "PWA"],
        color: "#2E7D32",
    },
    {
        slug: "tree-inventory",
        title: "樹木在庫管理アプリ",
        description: "2万本の樹木をスマホで即検索。在庫が見える化。",
        tags: ["Next.js", "Supabase", "PWA", "QR Code"],
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
        slug: "construction-crm",
        title: "建設業向けCRM",
        description: "2〜3ツールまたぎの情報を、これ1つに。自社開発のため外部コスト不要。",
        tags: ["Next.js", "Supabase", "PWA"],
        color: "#5C6BC0",
        badge: "開発中",
    },
    {
        slug: "construction-plan",
        title: "施工計画書AI自動化",
        description: "設計書を渡すだけで提出書類を自動生成。最終目標は7〜8割自動化。",
        tags: ["Python", "Gemini API", "PDF解析"],
        color: "#E65100",
        badge: "開発中",
    },
    {
        slug: "equipment-management",
        title: "建設機材管理アプリ",
        description: "AppSheetで300時間かけて開発。現場では導入されなかった原点のアプリ。",
        tags: ["Rapid Prototyping", "QR Code"],
        color: "#FFB800",
    },
];

const otherProjects = [
    {
        slug: "invoice-automation",
        title: "請求書自動化システム",
    },
    {
        slug: "expense-bot",
        title: "経費精算Bot",
    },
    {
        slug: "sales-report",
        title: "営業報告アプリ",
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
                {mainProjects.map((project, index) => (
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
                            {"badge" in project && project.badge && (
                                <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
                                    {project.badge}
                                </span>
                            )}
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

            {/* その他の実績 */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1.0, delay: 0.8 }}
                className="mt-12 text-center"
            >
                <p className="text-sm text-gray-500 mb-3">その他の実績</p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {otherProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/works/${project.slug}`}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-gray-600 hover:decoration-white"
                        >
                            {project.title}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
