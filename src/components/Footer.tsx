import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-auto" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono" style={{ color: "var(--fg-3)" }}>
        <span>brunogrossi.com</span>
        <div className="flex items-center gap-4">
          <a href="mailto:bruno@grossi.com.br" className="hover:text-[var(--accent)] transition-colors">
            bruno@grossi.com.br
          </a>
          <a href="https://linkedin.com/in/bruno-grossi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">
            LinkedIn ↗
          </a>
        </div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
