import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speaking requests, advisory opportunities, media inquiries, and partnerships.",
};

const inquiries = [
  {
    type: "Speaking Requests",
    desc: "Keynotes, panels, executive briefings, regulatory forums, corporate events. Available internationally.",
    icon: "◈",
  },
  {
    type: "Advisory Opportunities",
    desc: "Board advisory, technical advisory for fintech and financial institutions navigating Digital Assets, AI, or Quantum Computing.",
    icon: "◎",
  },
  {
    type: "Media Inquiries",
    desc: "Comments, features, podcast appearances, and expert quotes for publications covering financial technology.",
    icon: "⬡",
  },
  {
    type: "Partnerships",
    desc: "Research collaboration, institutional partnerships, and joint initiatives related to emerging financial technology.",
    icon: "◐",
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        tag="Contact"
        title={<>Let&rsquo;s work<br /><em className="font-serif-italic font-normal">together</em>.</>}
        subtitle="All contact via LinkedIn. Select your inquiry type below."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Inquiry types */}
        <div className="grid sm:grid-cols-2 gap-px border mb-16" style={{ borderColor: "var(--line)" }}>
          {inquiries.map(({ type, desc, icon }) => (
            <div key={type} className="p-6 border-b sm:border-r [&:nth-child(2n)]:border-r-0 last:border-b-0" style={{ borderColor: "var(--line)" }}>
              <div className="text-xl mb-3" style={{ color: "var(--accent)" }}>{icon}</div>
              <h3 className="font-medium mb-2" style={{ color: "var(--fg)" }}>{type}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Direct contact */}
        <div>
          <div className="font-mono text-xs mb-3" style={{ color: "var(--fg-3)" }}>LinkedIn</div>
          <a
            href="https://linkedin.com/in/bruno-grossi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-light hover:text-[var(--accent)] transition-colors flex items-center gap-2"
            style={{ color: "var(--fg)" }}
          >
            linkedin.com/in/bruno-grossi <span style={{ color: "var(--accent)" }}>↗</span>
          </a>
        </div>

        {/* Note */}
        <div className="mt-12 border-l-2 pl-6" style={{ borderColor: "var(--line)" }}>
          <p className="text-sm" style={{ color: "var(--fg-3)" }}>
            All inquiries via LinkedIn — speaking requests, advisory, media, and partnerships. Include a brief description of the opportunity and timeline.
          </p>
        </div>
      </div>
    </>
  );
}
