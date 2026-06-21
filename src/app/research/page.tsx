import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research",
  description: "Publications, papers, and research on Digital Assets, Post-Quantum Cryptography, and financial infrastructure.",
};

export default function Research() {
  return (
    <>
      <PageHeader
        tag="Research & Publications"
        title={<>Knowledge as <em className="font-serif-italic font-normal">asset</em>.</>}
        subtitle="Selected papers, technical articles, and research contributions. Each piece is designed to be immediately useful to practitioners in regulated financial institutions."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-0">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-b transition-colors hover:bg-[var(--bg-2)] -mx-4 px-4 rounded-sm"
              style={{ borderColor: "var(--line)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
                      {pub.category}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>{pub.date}</span>
                  </div>
                  <h3 className="text-base font-medium mb-2 group-hover:underline underline-offset-2" style={{ color: "var(--fg)" }}>
                    {pub.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--fg-2)" }}>
                    {pub.abstract}
                  </p>
                  <span className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>{pub.venue}</span>
                </div>
                <span className="text-base shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1" style={{ color: "var(--accent)" }}>
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
