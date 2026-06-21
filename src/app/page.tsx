import Link from "next/link";
import SectionTag from "@/components/SectionTag";
import ArticleRow from "@/components/ArticleRow";
import { articles } from "@/data/articles";

const credibilityItems = [
  "Inter & Co.",
  "Microsoft",
  "Chainlink",
  "UFMG",
  "Banco Central do Brasil",
];

const snapshot = [
  { n: "25+", label: "Years in Technology" },
  { n: "∞", label: "Head of Emerging Technologies" },
  { n: "DREX", label: "Pilot Participant" },
  { n: "MSc", label: "Computer Science" },
  { n: "Int'l", label: "Speaker" },
];

export default function Home() {
  const featured = articles.filter((a) => a.featured);

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-20">
        <span className="font-mono text-xs flex items-center gap-2 mb-8" style={{ color: "var(--fg-3)" }}>
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          Technology Executive · Brazil
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-8" style={{ color: "var(--fg)" }}>
          Building the Next Generation{" "}
          <br className="hidden sm:block" />
          of{" "}
          <em className="font-serif-italic font-normal">Financial Infrastructure</em>.
        </h1>

        <p className="text-lg max-w-2xl leading-relaxed mb-10" style={{ color: "var(--fg-2)" }}>
          Head of Emerging Technologies at Inter & Co. Working at the intersection of Digital Assets, CBDCs, AI and Quantum Computing.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/speaking"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm transition-colors"
            style={{ backgroundColor: "var(--fg)", color: "var(--paper)" }}
          >
            Speaking Engagements
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm border transition-colors hover:bg-[var(--bg-2)]"
            style={{ borderColor: "var(--line)", color: "var(--fg)" }}
          >
            Explore My Work
          </Link>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="border-y" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-2)" }}>
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-3">
          <span className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>Associated with</span>
          {credibilityItems.map((item) => (
            <span key={item} className="font-mono text-xs font-medium" style={{ color: "var(--fg-2)" }}>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Authority Snapshot */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px border" style={{ borderColor: "var(--line)" }}>
          {snapshot.map(({ n, label }) => (
            <div key={label} className="p-6 border-r last:border-r-0" style={{ borderColor: "var(--line)" }}>
              <div className="text-2xl font-light mb-1" style={{ color: "var(--accent)" }}>{n}</div>
              <div className="font-mono text-xs leading-snug" style={{ color: "var(--fg-3)" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "var(--line)" }} />
      </div>

      {/* Featured Insights */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionTag>Featured Writing</SectionTag>
            <h2 className="text-3xl font-light" style={{ color: "var(--fg)" }}>
              Recent <em className="font-serif-italic font-normal">insights</em>.
            </h2>
          </div>
          <Link href="/writing" className="font-mono text-xs hover:text-[var(--accent)] transition-colors hidden sm:block" style={{ color: "var(--fg-3)" }}>
            All articles ↗
          </Link>
        </div>

        <div>
          {featured.map((article) => (
            <ArticleRow key={article.num} article={article} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/writing" className="font-mono text-xs hover:text-[var(--accent)] transition-colors sm:hidden" style={{ color: "var(--fg-3)" }}>
            All articles ↗
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <hr style={{ borderColor: "var(--line)" }} />
      </div>

      {/* Positioning Statement */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed max-w-3xl" style={{ color: "var(--fg)" }}>
          &ldquo;Technology executive shaping the future of financial infrastructure through Digital Assets, AI, CBDCs and Quantum Computing.&rdquo;
        </blockquote>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/about" className="font-mono text-xs hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-3)" }}>
            About ↗
          </Link>
          <Link href="/projects" className="font-mono text-xs hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-3)" }}>
            Projects ↗
          </Link>
          <Link href="/research" className="font-mono text-xs hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-3)" }}>
            Research ↗
          </Link>
          <Link href="/contact" className="font-mono text-xs hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-3)" }}>
            Get in touch ↗
          </Link>
        </div>
      </section>
    </>
  );
}
