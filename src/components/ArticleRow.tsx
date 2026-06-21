import Image from "next/image";
import type { Article } from "@/data/articles";

export default function ArticleRow({ article }: { article: Article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 py-4 border-b transition-colors hover:bg-[var(--bg-2)] -mx-4 px-4 rounded-sm"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Thumbnail */}
      <div className="w-14 h-14 shrink-0 rounded-sm overflow-hidden bg-[var(--bg-3)]">
        <Image
          src={article.image}
          alt={article.title}
          width={56}
          height={56}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Num */}
      <span className="font-mono text-sm w-6 shrink-0" style={{ color: "var(--fg-3)" }}>
        {article.num}
      </span>

      {/* Title + summary */}
      <div className="flex-1 min-w-0">
        <span className="text-sm font-medium leading-snug group-hover:underline underline-offset-2 block" style={{ color: "var(--fg)" }}>
          {article.title}
        </span>
        {article.summary && (
          <span className="text-xs leading-snug mt-0.5 hidden sm:block line-clamp-1" style={{ color: "var(--fg-3)" }}>
            {article.summary}
          </span>
        )}
      </div>

      {/* Meta */}
      <span className="font-mono text-xs shrink-0 hidden sm:block text-right" style={{ color: "var(--fg-3)" }}>
        {article.venue}
        <br />
        {article.date}
      </span>

      {/* Arrow */}
      <span className="text-base shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--accent)" }}>
        ↗
      </span>
    </a>
  );
}
