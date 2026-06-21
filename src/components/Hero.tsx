export default function Hero() {
  return (
    <header id="top" className="max-w-4xl mx-auto px-6 pt-20 pb-24">
      <span
        className="font-mono text-xs flex items-center gap-2 mb-8"
        style={{ color: "var(--fg-3)" }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        Open to conversations
      </span>

      <h1
        className="text-5xl sm:text-6xl font-light leading-tight mb-10"
        style={{ color: "var(--fg)" }}
      >
        Bruno Grossi,
        <br />
        builder in{" "}
        <em className="font-serif-italic font-normal">
          Finance × Blockchain × AI
        </em>
        .
      </h1>

      <div className="grid sm:grid-cols-2 gap-8">
        <p className="text-base leading-relaxed" style={{ color: "var(--fg-2)" }}>
          Head of Digital Assets & Emerging Technologies at a major financial
          institution. I bridge research and production — custody, tokenization,
          CBDCs, DREX, post-quantum cryptography, applied AI.
        </p>

        <div className="space-y-2">
          {[
            { k: "Role", v: "Head of Digital Assets & Emerging Technologies" },
            { k: "Focus", v: "Tokenization · CBDCs · Post-quantum · Applied AI" },
            { k: "Contact", v: "bruno@grossi.com.br" },
          ].map(({ k, v }) => (
            <div key={k} className="flex gap-4 text-sm">
              <span
                className="font-mono w-16 shrink-0 pt-px"
                style={{ color: "var(--fg-3)" }}
              >
                {k}
              </span>
              {k === "Contact" ? (
                <a
                  href={`mailto:${v}`}
                  className="hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--fg-2)" }}
                >
                  {v}
                </a>
              ) : (
                <span style={{ color: "var(--fg-2)" }}>{v}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
