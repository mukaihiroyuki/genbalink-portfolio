"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

const projects = {
    "equipment-management": {
        title: "建設機材管理アプリ",
        subtitle: "300時間の開発。現場導入ゼロ。",
        description:
            "建設現場の車両や機材がどこにあるか分からない…紙の台帳を探し回る毎日。AppSheetで解決アプリを作った。コミュニティでは絶賛された。でも、現場では1日も動かなかった。この経験が、今の開発姿勢の原点になっている。",
        manga: "/images/manga_equipment.png",
        tech: ["AppSheet", "Google Sheets", "QR Code"],
        color: "#FFB800",
        noteUrl: "https://note.com/genbalink/n/n71ed479ad55e",
    },
    "tree-inventory": {
        title: "樹木在庫管理アプリ",
        subtitle: "2万本の樹木をスマホで即検索",
        description:
            "広大な圃場に2万本以上の樹木。どこに何があるか、PCで検索しても遅い…。PWAアプリとQRタグで、現場から瞬時に在庫を把握。",
        manga: "/images/manga_tree_inventory.png",
        tech: ["Next.js", "Supabase", "PWA", "QR Code"],
        color: "#4CAF50",
    },
    "document-check": {
        title: "顧客書類チェックアプリ",
        subtitle: "4万件超のデータを0.3秒で検索",
        description:
            "4万件を超える顧客データ。スプレッドシートを開くだけで3分。契約書の場所を探してLINEで確認…もう限界。Supabaseへの移行で、検索は0.3秒に。",
        manga: "/images/manga_document_check.png",
        tech: ["Next.js", "Supabase", "Google Apps Script"],
        color: "#2196F3",
    },
    "invoice-automation": {
        title: "請求書自動化システム",
        subtitle: "転記ゼロ、年64万円削減",
        description:
            "30人分の請求書を毎月手作業で転記。ミスして怒られ、手戻りの連続。入力するだけでPDF自動生成、控えも自動送信。転記作業がゼロになった。",
        manga: "/images/manga_invoice_automation.png",
        tech: ["Google Apps Script", "HTML/CSS/JS", "PDF生成"],
        color: "#9C27B0",
    },
    "expense-bot": {
        title: "経費精算Bot",
        subtitle: "レシート投げるだけで仕訳完了",
        description:
            "月100枚のレシート。手入力して、カテゴリ分けして、Excel整理して…。Discordにレシート写真を投げるだけで、AIが自動仕訳。",
        manga: "/images/manga_expense_bot.png",
        tech: ["Python", "Discord.py", "Gemini API", "Google Sheets"],
        color: "#00BCD4",
    },
    "sales-report": {
        title: "営業報告アプリ",
        subtitle: "スマホPIN入力で報告完結",
        description:
            "深夜に気づく「報告忘れた…」。Excel開いてコピペして…ミスする。スマホでPIN入力するだけで報告完了。入金漏れも自動で通知。",
        manga: "/images/manga_sales_report.png",
        tech: ["Google Apps Script", "HTML/CSS/JS", "PIN認証"],
        color: "#FF5722",
    },
};

type Params = Promise<{ slug: string }>;

export default function ProjectPage({ params }: { params: Params }) {
    const { slug } = use(params);
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] px-6 py-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/#works"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back to Works
                </Link>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                        style={{ textShadow: `0 0 30px ${project.color}40` }}
                    >
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-400 mb-8">
                        {project.subtitle}
                    </p>
                </motion.div>

                {/* Manga */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-12 rounded-xl overflow-hidden border border-white/10"
                >
                    <Image
                        src={project.manga}
                        alt={project.title}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12"
                >
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Note Article Link */}
                {"noteUrl" in project && project.noteUrl && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-12"
                    >
                        <a
                            href={project.noteUrl as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-8 rounded-xl border-l-4 border border-white/10 bg-gradient-to-r from-[#1a1a1a] to-[#111] hover:to-[#1a1a1a] transition-all duration-300"
                            style={{
                                borderLeftColor: project.color,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = project.color;
                                e.currentTarget.style.boxShadow = `0 0 30px ${project.color}30`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.borderLeftColor = project.color;
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: project.color }}>
                                Related Article
                            </p>
                            <p className="text-xl md:text-2xl text-white font-bold mb-4">
                                この経験について書いた記事を読む
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-400">note.com</span>
                                <div
                                    className="flex items-center justify-center w-8 h-8 rounded-full group-hover:translate-x-1 transition-transform"
                                    style={{ backgroundColor: `${project.color}20` }}
                                >
                                    <svg
                                        className="w-4 h-4"
                                        style={{ color: project.color }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                )}

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="border-t border-white/10 pt-8"
                >
                    <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white/5 text-gray-400 rounded-full text-sm border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

