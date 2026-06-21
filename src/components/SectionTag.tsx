export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-mono text-xs tracking-widest uppercase mb-3"
      style={{ color: "var(--fg-3)" }}
    >
      {children}
    </div>
  );
}
