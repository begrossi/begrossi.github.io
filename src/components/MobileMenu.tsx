"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — visible below lg */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span
          className="block w-5 h-px transition-all duration-200"
          style={{
            backgroundColor: "var(--fg)",
            transform: open ? "translateY(4px) rotate(45deg)" : "none",
          }}
        />
        <span
          className="block w-5 h-px transition-all duration-200"
          style={{
            backgroundColor: "var(--fg)",
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-5 h-px transition-all duration-200"
          style={{
            backgroundColor: "var(--fg)",
            transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="lg:hidden fixed top-14 left-0 right-0 z-40 border-b"
          style={{
            backgroundColor: "var(--paper)",
            borderColor: "var(--line)",
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center px-6 py-4 font-mono text-sm border-b transition-colors hover:bg-[var(--bg-2)]"
              style={{ borderColor: "var(--line)", color: "var(--fg-2)" }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
