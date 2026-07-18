import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    keywords: string[];
    thumbnail: string;
    draft: boolean;
    content: string;
};

// 開発時は draft:true も表示、本番ビルドでは非表示
const isDev = process.env.NODE_ENV !== "production";

function readAllRaw(): BlogPost[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

    const posts = files.map((file) => {
        const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
        const { data, content } = matter(raw);

        return {
            slug: (data.slug as string) || file.replace(/\.md$/, ""),
            title: (data.title as string) || "(無題)",
            description: (data.description as string) || "",
            date: (data.date as string) || "",
            tags: (data.tags as string[]) || [],
            keywords: (data.keywords as string[]) || [],
            thumbnail: (data.thumbnail as string) || "",
            draft: Boolean(data.draft),
            content,
        } satisfies BlogPost;
    });

    const visible = isDev ? posts : posts.filter((p) => !p.draft);

    // 日付の新しい順
    return visible.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): BlogPost[] {
    return readAllRaw();
}

export function getPostBySlug(slug: string): BlogPost | null {
    return readAllRaw().find((p) => p.slug === slug) ?? null;
}
