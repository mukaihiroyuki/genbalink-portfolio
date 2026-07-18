import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogThumb from "@/components/BlogThumb";

export const metadata: Metadata = {
    title: "ブログ | GenbaLink",
    description:
        "施工計画書DXや建設現場の業務改善について、現場監督の実務目線で発信します。",
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-[#111] px-6 py-20 md:py-28">
            <div className="mx-auto max-w-3xl">
                <Link
                    href="/"
                    className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors"
                >
                    ← ポートフォリオに戻る
                </Link>

                <h1 className="mt-8 text-4xl md:text-5xl font-bold text-white">
                    ブログ
                </h1>
                <p className="mt-4 text-gray-400">
                    施工計画書DXや現場の業務改善について、実務目線で書いています。
                </p>

                {posts.length === 0 ? (
                    <p className="mt-16 text-gray-500">記事は準備中です。</p>
                ) : (
                    <ul className="mt-12 space-y-8">
                        {posts.map((post) => (
                            <li key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#00D4FF]/50 transition-colors"
                                >
                                    <BlogThumb
                                        thumbnail={post.thumbnail}
                                        title={post.title}
                                        tag={post.tags[0]}
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center gap-3">
                                            <time className="text-sm text-gray-500">
                                                {post.date}
                                            </time>
                                            {post.draft && (
                                                <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-300">
                                                    下書き
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="mt-2 text-xl md:text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="mt-2 text-gray-400 line-clamp-2">
                                            {post.description}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}
