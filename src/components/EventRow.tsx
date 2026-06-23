import type { Event } from "@/data/events";

export default function EventRow({ event }: { event: Event }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 py-4 border-b transition-colors hover:bg-[var(--bg-2)] -mx-4 px-4 rounded-sm"
      style={{ borderColor: "var(--line)" }}
    >
      {/* Thumbnail placeholder */}
      <div
        className="w-14 h-14 shrink-0 rounded-sm flex items-center justify-center font-mono text-xs font-medium"
        style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
      >
        {event.name.slice(0, 2).toUpperCase()}
      </div>

      {/* Num */}
      <span
        className="font-mono text-sm w-6 shrink-0"
        style={{ color: "var(--fg-3)" }}
      >
        {event.num}
      </span>

      {/* Name + role badge */}
      <div className="flex-1 flex items-center gap-2 min-w-0">
        <span
          className="text-sm font-medium leading-snug group-hover:underline underline-offset-2 truncate"
          style={{ color: "var(--fg)" }}
        >
          {event.name}
        </span>
        <span
          className="font-mono text-[10px] px-1.5 py-0.5 rounded border shrink-0"
          style={{
            color: "var(--accent)",
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent-light)",
          }}
        >
          {event.role}
        </span>
      </div>

      {/* Meta */}
      <span
        className="font-mono text-xs shrink-0 hidden sm:block text-right"
        style={{ color: "var(--fg-3)" }}
      >
        {event.location}
        <br />
        {event.date}
      </span>

      {/* Arrow */}
      <span
        className="text-base shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ color: "var(--accent)" }}
      >
        ↗
      </span>
    </a>
  );
}
