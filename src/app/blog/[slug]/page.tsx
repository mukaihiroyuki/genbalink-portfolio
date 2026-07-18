import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogThumb from "@/components/BlogThumb";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | GenbaLink`,
        description: post.description,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            ...(post.thumbnail ? { images: [post.thumbnail] } : {}),
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<Params>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <main className="min-h-screen bg-[#111] px-6 py-20 md:py-28">
            <article className="mx-auto max-w-2xl">
                <Link
                    href="/blog"
                    className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors"
                >
                    ← 記事一覧へ
                </Link>

                <div className="mt-8 flex items-center gap-3">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    {post.draft && (
                        <span className="rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs text-yellow-300">
                            下書き（未公開）
                        </span>
                    )}
                </div>

                <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-white">
                    {post.title}
                </h1>

                <BlogThumb
                    thumbnail={post.thumbnail}
                    title={post.title}
                    tag={post.tags[0]}
                    className="mt-8 rounded-2xl"
                />

                <div
                    className="mt-10 text-gray-300 leading-relaxed
                        [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white
                        [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-white
                        [&_p]:my-5
                        [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                        [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                        [&_li]:text-gray-300
                        [&_strong]:text-white [&_strong]:font-bold
                        [&_a]:text-[#00D4FF] [&_a]:underline
                        [&_blockquote]:border-l-4 [&_blockquote]:border-[#00D4FF]/40 [&_blockquote]:pl-4 [&_blockquote]:text-gray-400 [&_blockquote]:italic"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8">
                    <Link
                        href="/blog"
                        className="text-sm text-gray-400 hover:text-[#00D4FF] transition-colors"
                    >
                        ← 記事一覧へ戻る
                    </Link>
                </div>
            </article>
        </main>
    );
}
