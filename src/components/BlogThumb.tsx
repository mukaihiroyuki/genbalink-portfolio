import Image from "next/image";

type Props = {
    thumbnail: string;
    title: string;
    tag?: string;
    className?: string;
};

// 画像があれば表示、無ければ崩れないフォールバック（グラデ＋タグ＋ドキュメントアイコン）
export default function BlogThumb({ thumbnail, title, tag, className }: Props) {
    return (
        <div
            className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#0d2b3f] to-[#00394d] ${className ?? ""}`}
        >
            {thumbnail ? (
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                />
            ) : (
                <>
                    {/* ドキュメント（施工計画書）アイコンを薄く配置 */}
                    <svg
                        className="absolute right-4 top-1/2 h-24 w-24 -translate-y-1/2 text-[#00D4FF]/15"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    {tag && (
                        <span className="absolute bottom-3 left-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-[#00D4FF]">
                            #{tag}
                        </span>
                    )}
                    <span className="absolute left-4 top-3 text-xs font-semibold tracking-widest text-white/40">
                        GENBALINK BLOG
                    </span>
                </>
            )}
        </div>
    );
}
