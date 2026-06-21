import Link from "next/link";
import LiveClock from "./LiveClock";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/speaking", label: "Speaking" },
  { href: "/media", label: "Media" },
  { href: "/writing", label: "Writing" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--line)",
        backgroundColor: "color-mix(in srgb, var(--paper) 88%, transparent)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
            <rect x="6" y="6" width="24" height="24" fill="var(--fg)" />
            <rect x="34" y="6" width="24" height="24" stroke="var(--fg)" strokeWidth="2.5" />
            <rect x="6" y="34" width="24" height="24" stroke="var(--fg)" strokeWidth="2.5" />
            <rect x="34" y="34" width="24" height="24" fill="var(--accent)" />
          </svg>
          <span className="font-medium text-sm" style={{ color: "var(--fg)" }}>
            Bruno Grossi
          </span>
        </Link>

        {/* Links — desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-xs px-2.5 py-1.5 rounded transition-colors hover:bg-[var(--bg-2)] hover:text-[var(--fg)]"
              style={{ color: "var(--fg-3)" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <LiveClock />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
