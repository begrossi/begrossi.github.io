import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects that demonstrate the intersection of emerging technology and regulated financial infrastructure.",
};

export default function Projects() {
  return (
    <>
      <PageHeader
        tag="Projects"
        title={<>Not everything.<br /><em className="font-serif-italic font-normal">The ones that matter.</em></>}
        subtitle="Selected projects that went from concept to production inside regulated institutions. Each one required navigating technology, compliance, and organizational inertia simultaneously."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-0">
        {projects.map((project, i) => (
          <div key={i} className="py-12 border-b" style={{ borderColor: "var(--line)" }}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-8">
              {/* Number */}
              <div className="font-mono text-4xl font-light shrink-0 w-12" style={{ color: "var(--bg-3)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h2 className="text-xl font-medium" style={{ color: "var(--fg)" }}>{project.title}</h2>
                  <span className="font-mono text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}>
                    {project.category}
                  </span>
                </div>

                {/* Challenge / Solution / Impact */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { label: "Challenge", text: project.challenge },
                    { label: "Solution", text: project.solution },
                    { label: "Impact", text: project.impact },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <div className="font-mono text-xs mb-2" style={{ color: "var(--fg-3)" }}>{label}</div>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--fg-2)" }}>{text}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 border rounded-sm" style={{ borderColor: "var(--line)", color: "var(--fg-3)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
