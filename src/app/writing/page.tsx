import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ArticleRow from "@/components/ArticleRow";
import { articles, type Category } from "@/data/articles";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles on Digital Assets, DREX, AI, Quantum Computing, and technology leadership in financial services.",
};

const categories: Category[] = ["Digital Assets", "DREX", "AI", "Quantum", "Leadership"];

export default function Writing() {
  const byCategory = categories.reduce<Record<string, typeof articles>>((acc, cat) => {
    const filtered = articles.filter((a) => a.category === cat);
    if (filtered.length) acc[cat] = filtered;
    return acc;
  }, {});

  return (
    <>
      <PageHeader
        tag="Writing"
        title={<>Thinking in <em className="font-serif-italic font-normal">public</em>.</>}
        subtitle="Articles on the technologies reshaping financial infrastructure. No hype — only ideas that hold up under operational scrutiny."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">
        {Object.entries(byCategory).map(([cat, items], i) => (
          <div key={cat}>
            <div className="font-mono text-xs mb-6 pb-2 border-b" style={{ color: "var(--fg-3)", borderColor: "var(--line)" }}>
              {String(i + 1).padStart(2, "0")} · {cat}
            </div>
            {items.map((article) => (
              <ArticleRow key={article.num} article={article} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
