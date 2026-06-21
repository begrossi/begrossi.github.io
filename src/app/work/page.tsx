import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTag from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "Work",
  description: "Work themes: Digital Assets, AI, Quantum Computing, and Technology Leadership.",
};

const themes = [
  {
    tag: "01 · Digital Assets",
    title: "Tokenization and onchain finance.",
    items: ["DREX — Brazil's CBDC", "Tokenization of Real-World Assets", "Trade Finance on Blockchain", "AMM for Tokenized Bonds", "Stablecoins in Regulated Markets", "Cross-chain Interoperability"],
    body: "Deploying tokenization inside a regulated institution is not a DeFi experiment. It requires architectural decisions that hold up under compliance scrutiny, custody frameworks that don't exist yet in most places, and a business case that survives a board presentation.",
    cta: { label: "See Projects →", href: "/projects" },
  },
  {
    tag: "02 · AI",
    title: "Applied intelligence in financial services.",
    items: ["AI Strategy for Regulated Institutions", "LLM Applications in Finance", "Model Risk Governance", "Agentic Workflows", "AI in Credit and Fraud", "Emerging Trends"],
    body: "Most AI initiatives inside financial institutions fail at governance, not technology. Building AI applications that survive regulatory scrutiny requires a different design discipline than building AI products for consumers.",
    cta: { label: "Read insights →", href: "/insights" },
  },
  {
    tag: "03 · Quantum Computing",
    title: "Readiness before the threat arrives.",
    items: ["Post-Quantum Cryptography Migration", "Harvest Now Decrypt Later Risks", "NIST PQC Standards Implementation", "Quantum Threat Modeling", "Cryptographic Inventory", "Research Initiatives"],
    body: "The quantum threat to financial infrastructure is not theoretical and not distant. Adversaries are harvesting encrypted data today. The migration window is shorter than most CISOs assume.",
    cta: { label: "See research →", href: "/research" },
  },
  {
    tag: "04 · Technology Leadership",
    title: "Building innovation at institutional scale.",
    items: ["Innovation Function Design", "Emerging Technology Adoption", "Platform Engineering", "Developer Experience", "Team Architecture", "Governance and Risk"],
    body: "Innovation inside a large regulated institution is a different discipline than startups. The constraint is not capital or talent — it's the organizational immune system. Knowing how to navigate that is the rarest skill.",
    cta: { label: "Speaking topics →", href: "/speaking" },
  },
];

export default function Work() {
  return (
    <>
      <PageHeader
        tag="Work"
        title={<>Four themes.<br /><em className="font-serif-italic font-normal">One direction.</em></>}
        subtitle="Technology executive focused on the infrastructure layer of finance — the systems that everything else depends on."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        {themes.map(({ tag, title, items, body, cta }) => (
          <div key={tag}>
            <SectionTag>{tag}</SectionTag>
            <div className="grid md:grid-cols-2 gap-12 mt-4">
              <div>
                <h2 className="text-2xl font-light mb-4" style={{ color: "var(--fg)" }}>{title}</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fg-2)" }}>{body}</p>
                <Link href={cta.href} className="font-mono text-xs hover:text-[var(--accent)] transition-colors" style={{ color: "var(--fg-3)" }}>
                  {cta.label}
                </Link>
              </div>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 border-b text-sm" style={{ borderColor: "var(--line)", color: "var(--fg-2)" }}>
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
