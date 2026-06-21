import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description: "Press coverage, interviews, features, and media appearances.",
};

const typeBadgeColor: Record<string, string> = {
  Feature: "#1a3a5c",
  Interview: "#2d5a3d",
  Quote: "#5c3a1a",
  Podcast: "#3a1a5c",
  Video: "#5c1a3a",
};

export default function Media() {
  return (
    <>
      <PageHeader
        tag="Media"
        title={<>Public <em className="font-serif-italic font-normal">appearances</em>.</>}
        subtitle="Press coverage, interviews, features, podcasts, and on-stage appearances. For media inquiries, use the contact form."
      />

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--line)" }}>
                {["Date", "Publication", "Topic", "Type", ""].map((h) => (
                  <th key={h} className="font-mono text-xs text-left py-3 pr-6 last:pr-0" style={{ color: "var(--fg-3)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mediaItems.map((item, i) => (
                <tr key={i} className="border-b hover:bg-[var(--bg-2)] transition-colors group" style={{ borderColor: "var(--line)" }}>
                  <td className="py-4 pr-6 font-mono text-xs whitespace-nowrap" style={{ color: "var(--fg-3)" }}>
                    {item.date}
                  </td>
                  <td className="py-4 pr-6 font-medium whitespace-nowrap" style={{ color: "var(--fg)" }}>
                    {item.publication}
                  </td>
                  <td className="py-4 pr-6" style={{ color: "var(--fg-2)" }}>
                    {item.topic}
                  </td>
                  <td className="py-4 pr-6">
                    <span
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: typeBadgeColor[item.type] + "22", color: typeBadgeColor[item.type] }}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="py-4">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs transition-colors hover:text-[var(--accent)]"
                      style={{ color: "var(--fg-3)" }}
                    >
                      ↗
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
