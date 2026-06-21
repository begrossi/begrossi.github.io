import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionTag from "@/components/SectionTag";

export const metadata: Metadata = {
  title: "About",
  description:
    "25+ years shaping technology — from a BBS at age 13 to leading Emerging Technologies at Inter.",
};

const chapters = [
  {
    tag: "Early Builder",
    title: "A BBS at 13. Startups before startups had a name.",
    body: "Before the internet was mainstream, I was already connecting people through technology. At 13, I built my first Bulletin Board System — a small node in a world that was just beginning to go online. That curiosity never stopped. Over the years I ventured into several startups, each one teaching me something different about resilience, creativity, and the gap between what technology promises and what it actually delivers.",
  },
  {
    tag: "Engineer",
    title: "Software engineering at the foundation.",
    body: "More than two decades designing and leading technical teams at scale. Distributed systems, platform architecture, DevOps, developer experience — I've built production infrastructure inside large institutions and learned what it takes to ship systems that don't fail. The discipline from those years is what makes the frontier work credible.",
  },
  {
    tag: "Innovator",
    title: "Blockchain, AI and the frontier.",
    body: "Blockchain captured my attention with its potential to redesign industries through decentralization and programmability. Artificial Intelligence arrived as a second wave. These two forces pulled me toward a specialization that wasn't yet called emerging technology — exploring what these tools could actually do inside regulated, high-stakes environments where the cost of being wrong is real.",
  },
  {
    tag: "Leadership at Inter",
    title: "DREX, Quantum, CBDCs and a team of builders.",
    body: "Joining Inter as Head of Emerging Technologies marked the convergence of everything that came before. Leading teams working on DREX — Brazil's Digital Real initiative — and exploring Quantum Computing alongside blockchain, CBDCs, and AI. Work that requires not just technical depth but strategic vision: aligning what's possible with what the institution can actually ship.",
  },
  {
    tag: "Academia",
    title: "UFMG, UFOP and Cinema.",
    body: "MSc in Computer Science from UFMG. Graduate in Computer Science from UFOP. And — perhaps the least expected line on a technology executive's résumé — a graduate degree in Cinema and Audiovisual from UNA. The combination is not accidental. Interdisciplinary thinking is a structural advantage. Analytical rigor and creative framing are not opposites.",
  },
];

const credentials = [
  { label: "Current Role", value: "Head of Emerging Technologies, Inter & Co." },
  { label: "MSc", value: "Computer Science, UFMG" },
  { label: "Graduate", value: "Computer Science, UFOP" },
  { label: "Graduate", value: "Cinema and Audiovisual, UNA" },
  { label: "Experience", value: "25+ years in technology" },
  { label: "Focus", value: "Digital Assets · CBDCs · AI · Quantum Computing" },
  { label: "Location", value: "São Paulo, Brazil" },
];

export default function About() {
  return (
    <>
      <PageHeader
        tag="About"
        title={
          <>
            25 years of<br />
            <em className="font-serif-italic font-normal">winding paths</em>.
          </>
        }
        subtitle="From a BBS at 13 to leading emerging technologies at one of Brazil's largest financial institutions. The path was not linear — that's the point."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">

        {/* Narrative chapters */}
        <div className="space-y-0 mb-20">
          {chapters.map(({ tag, title, body }, i) => (
            <div
              key={tag}
              className="grid md:grid-cols-[200px_1fr] gap-8 py-10 border-b"
              style={{ borderColor: "var(--line)" }}
            >
              <div>
                <div className="font-mono text-xs mb-1" style={{ color: "var(--fg-3)" }}>
                  {String(i + 1).padStart(2, "0")} · {tag}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 leading-snug" style={{ color: "var(--fg)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Long-form narrative */}
        <div className="grid md:grid-cols-[200px_1fr] gap-8 mb-20">
          <div>
            <SectionTag>Full story</SectionTag>
          </div>
          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>
            <p>
              My journey began with a deep dive into the principles of software engineering — but even before that, my entrepreneurial spirit was evident. At just 13 years old, I created my first Bulletin Board System, connecting people through technology at a time when the internet was still in its infancy. This early venture sparked a lifelong passion for innovation and problem-solving. Over the years, I ventured into several startups, each teaching me invaluable lessons about resilience, creativity, and the practical applications of technology.
            </p>
            <p>
              These formative years instilled a problem-solving mindset and an appreciation for the intricate balance between creativity and logic. Working on diverse projects, I gained a strong foundation in designing and implementing robust systems — the cornerstone of everything that followed.
            </p>
            <p>
              As technology evolved, I found myself drawn to the frontier. Blockchain captured my imagination with its potential to revolutionize industries through decentralization and transparency. Around the same time, Artificial Intelligence emerged as another transformative force. These dual passions drove me to specialize in these domains, exploring their applications and implications for businesses and society.
            </p>
            <p>
              Joining Inter marked a significant turning point. Leading the Emerging Technologies team, I&rsquo;ve had the privilege of working on groundbreaking projects such as DREX — Brazil&rsquo;s Digital Real initiative — and exploring the possibilities of Quantum Computing. Collaborating with brilliant minds across blockchain, CBDCs, AI, and other cutting-edge fields has been both a challenge and a joy. It&rsquo;s a role that requires not only technical expertise but also strategic vision: aligning emerging technologies with real-world impact.
            </p>
            <p>
              Beyond professional roles, I&rsquo;ve always sought to bridge the gap between academia and industry. As an MSc graduate in Computer Science from UFMG, a Computer Science graduate from UFOP, and a Cinema and Audiovisual graduate from UNA, I believe in the power of interdisciplinary approaches. My academic background provides both analytical rigor and a creative lens for problem-solving.
            </p>
            <p>
              Today, I am as curious as ever about the next frontier — advancing security through post-quantum cryptography, unlocking the potential of tokenized assets, and fostering collaboration with startups and regulators. My goal is not just to adapt to change, but to be an active participant in shaping it.
            </p>
          </div>
        </div>

        {/* Mission statement */}
        <div className="border-l-2 pl-6 mb-20" style={{ borderColor: "var(--accent)" }}>
          <p className="text-xl font-light leading-relaxed" style={{ color: "var(--fg)" }}>
            My mission is helping financial institutions navigate the technologies that will define the next decade — and doing it as a builder, not just a strategist.
          </p>
        </div>

        {/* Credentials */}
        <div>
          <SectionTag>Credentials</SectionTag>
          <div className="space-y-0 mt-6">
            {credentials.map(({ label, value }, i) => (
              <div
                key={i}
                className="flex gap-6 py-3 border-b text-sm"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="font-mono w-28 shrink-0 pt-px" style={{ color: "var(--fg-3)" }}>
                  {label}
                </span>
                <span style={{ color: "var(--fg)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
