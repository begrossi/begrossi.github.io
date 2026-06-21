import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { insights, type InsightCategory } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "A permanent repository of ideas on DREX, CBDCs, Stablecoins, Tokenization, AI, and Quantum Computing.",
};

const categories: InsightCategory[] = ["DREX", "CBDCs", "Stablecoins", "Tokenization", "AI", "Quantum"];

const categoryColor: Record<InsightCategory, string> = {
  DREX: "#1a3a5c",
  CBDCs: "#2d5a3d",
  Stablecoins: "#5c3a1a",
  Tokenization: "#3a1a5c",
  AI: "#5c1a3a",
  Quantum: "#1a5c4a",
};

export default function Insights() {
  return (
    <>
      <PageHeader
        tag="Insights"
        title={<>Ideas that<br /><em className="font-serif-italic font-normal">compound</em>.</>}
        subtitle="A permanent repository of thinking on the technologies reshaping financial infrastructure. Updated continuously. No hype cycle required."
      />

      {/* Category index */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="font-mono text-xs px-3 py-1 rounded-sm border"
              style={{ borderColor: "var(--line)", color: "var(--fg-2)" }}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-0">
        {insights.map((insight, i) => (
          <article key={i} className="py-10 border-b" style={{ borderColor: "var(--line)" }}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded"
                style={{ backgroundColor: categoryColor[insight.category] + "18", color: categoryColor[insight.category] }}
              >
                {insight.category}
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>{insight.date}</span>
            </div>
            <h2 className="text-xl font-medium mb-4 leading-snug" style={{ color: "var(--fg)" }}>
              {insight.title}
            </h2>
            <p className="text-sm leading-relaxed max-w-3xl mb-4" style={{ color: "var(--fg-2)" }}>
              {insight.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {insight.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border rounded-sm" style={{ borderColor: "var(--line)", color: "var(--fg-3)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
