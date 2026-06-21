import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTag from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "About",
  description: "The evolution of a technology executive — from early builder to shaping the future of financial infrastructure.",
};

const chapters = [
  {
    tag: "Early Builder",
    title: "Programming since childhood.",
    body: "Grew up taking systems apart to understand how they worked. Started writing code before finishing school. The question was never 'what is this?' — always 'what becomes possible if we redesign this?'",
  },
  {
    tag: "Engineer",
    title: "Software engineering and technology leadership.",
    body: "25+ years designing, building, and leading technical teams at scale. Deep expertise in distributed systems, platform architecture, and developer experience. Spent a decade leading engineering teams inside large institutions — learning what it actually takes to ship production systems that don't fail.",
  },
  {
    tag: "Innovator",
    title: "Blockchain, AI and emerging technologies.",
    body: "Led the adoption of blockchain, AI, and frontier technologies at a major Brazilian financial institution. Built the innovation function from scratch: team design, governance, tooling, and the internal politics of doing new things inside regulated organizations. Became the bridge between what research shows is possible and what compliance will actually allow.",
  },
  {
    tag: "Future Infrastructure",
    title: "Digital Assets, CBDCs, AI and Quantum Computing.",
    body: "Current focus: the technologies that will define the next decade of financial infrastructure. Active participant in DREX — Brazil's CBDC pilot. Leading post-quantum cryptography migration. Designing tokenization architectures for regulated assets. Building AI applications that survive the scrutiny of financial regulators.",
  },
];

const credentials = [
  { label: "Current Role", value: "Head of Emerging Technologies, Inter & Co." },
  { label: "Education", value: "MSc Computer Science, UFMG" },
  { label: "Experience", value: "25+ years in technology leadership" },
  { label: "Focus", value: "Digital Assets · CBDCs · AI · Quantum Computing" },
  { label: "Location", value: "São Paulo, Brazil" },
];

export default function About() {
  return (
    <>
      <PageHeader
        tag="About"
        title={<>Not a biography.<br /><em className="font-serif-italic font-normal">An evolution.</em></>}
        subtitle="Technology executive at the intersection of financial infrastructure and frontier tech."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Narrative chapters */}
        <div className="grid md:grid-cols-2 gap-px border mb-20" style={{ borderColor: "var(--line)" }}>
          {chapters.map(({ tag, title, body }) => (
            <div key={tag} className="p-8 border-b md:border-b-0 md:border-r last:border-r-0" style={{ borderColor: "var(--line)" }}>
              <div className="font-mono text-xs mb-3" style={{ color: "var(--fg-3)" }}>{tag}</div>
              <h3 className="text-lg font-medium mb-3" style={{ color: "var(--fg)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{body}</p>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className="border-l-2 pl-6 mb-20" style={{ borderColor: "var(--accent)" }}>
          <p className="text-xl font-light leading-relaxed" style={{ color: "var(--fg)" }}>
            My mission is helping financial institutions navigate the technologies that will define the next decade.
          </p>
        </div>

        {/* Credentials */}
        <div>
          <SectionTag>Credentials</SectionTag>
          <div className="space-y-4 mt-6">
            {credentials.map(({ label, value }) => (
              <div key={label} className="flex gap-6 py-3 border-b text-sm" style={{ borderColor: "var(--line)" }}>
                <span className="font-mono w-28 shrink-0 pt-px" style={{ color: "var(--fg-3)" }}>{label}</span>
                <span style={{ color: "var(--fg)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
