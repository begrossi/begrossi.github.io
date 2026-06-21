"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span
      className="font-mono flex items-center gap-1.5 text-sm"
      style={{ color: "var(--fg-3)" }}
    >
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: "var(--green)" }}
      />
      <a
        href="https://maps.google.com/?q=Belo+Horizonte,MG,Brazil"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[var(--accent)] transition-colors"
      >
        BH
      </a>
      {" · "}
      {time}
    </span>
  );
}
