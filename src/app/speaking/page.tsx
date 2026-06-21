import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionTag from "@/components/SectionTag";
import EventRow from "@/components/EventRow";
import { speakingTopics } from "@/data/speaking";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Speaking topics and past events — Digital Assets, CBDCs, AI, Quantum Computing, and building innovation inside large organizations.",
};

export default function Speaking() {
  return (
    <>
      <PageHeader
        tag="Speaking"
        title={<>Topics that move<br /><em className="font-serif-italic font-normal">institutions</em>.</>}
        subtitle="Available for keynotes, panels, and executive briefings. Topics span Digital Assets, CBDCs, AI, Quantum Computing, and technology leadership inside regulated organizations."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Topics */}
        <div className="mb-20">
          <SectionTag>Speaking Topics</SectionTag>
          <div className="grid sm:grid-cols-2 gap-px border mt-6" style={{ borderColor: "var(--line)" }}>
            {speakingTopics.map(({ title, description, audience, icon }) => (
              <div key={title} className="p-6 border-b sm:border-r [&:nth-child(2n)]:border-r-0 last:border-b-0" style={{ borderColor: "var(--line)" }}>
                <div className="text-2xl mb-3" style={{ color: "var(--accent)" }}>{icon}</div>
                <h3 className="text-base font-medium mb-2" style={{ color: "var(--fg)" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--fg-2)" }}>{description}</p>
                <div className="font-mono text-xs" style={{ color: "var(--fg-3)" }}>
                  Audience: {audience}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <SectionTag>Past Events</SectionTag>
          <div className="mt-6">
            {events.map((event) => (
              <EventRow key={event.num} event={event} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border p-8 rounded-sm" style={{ borderColor: "var(--line)", backgroundColor: "var(--bg-2)" }}>
          <h3 className="text-lg font-medium mb-2" style={{ color: "var(--fg)" }}>Book a Speaking Engagement</h3>
          <p className="text-sm mb-4" style={{ color: "var(--fg-2)" }}>
            Available for keynotes, executive panels, regulatory briefings, and corporate events. Talks can be customized for technical or non-technical audiences.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-sm transition-colors" style={{ backgroundColor: "var(--fg)", color: "var(--paper)" }}>
            Get in touch ↗
          </Link>
        </div>
      </div>
    </>
  );
}
