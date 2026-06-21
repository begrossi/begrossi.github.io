import LiveClock from "./LiveClock";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--line)",
        backgroundColor: "color-mix(in srgb, var(--paper) 85%, transparent)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
            <rect x="6" y="6" width="24" height="24" fill="var(--fg)" />
            <rect x="34" y="6" width="24" height="24" stroke="var(--fg)" strokeWidth="2.5" />
            <rect x="6" y="34" width="24" height="24" stroke="var(--fg)" strokeWidth="2.5" />
            <rect x="34" y="34" width="24" height="24" fill="var(--accent)" />
          </svg>
          <span className="font-medium text-sm truncate" style={{ color: "var(--fg)" }}>
            Bruno Grossi
          </span>
          <span className="font-mono text-xs hidden sm:inline truncate" style={{ color: "var(--fg-3)" }}>
            Head of Digital Assets · Brazil
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-5">
          {["#about", "#writing", "#events"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-sm transition-colors hover:text-[var(--fg)] capitalize"
              style={{ color: "var(--fg-3)" }}
            >
              {href.slice(1)}
            </a>
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
