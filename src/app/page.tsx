import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionTag from "@/components/SectionTag";
import ArticleRow from "@/components/ArticleRow";
import EventRow from "@/components/EventRow";
import { articles } from "@/data/articles";
import { events } from "@/data/events";

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        <Hero />

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <hr style={{ borderColor: "var(--line)" }} />
        </div>

        {/* Writing */}
        <section id="writing" className="max-w-4xl mx-auto px-6 py-20">
          <SectionTag>01 · Writing</SectionTag>
          <h2
            className="text-3xl font-light mb-10"
            style={{ color: "var(--fg)" }}
          >
            Selected{" "}
            <em className="font-serif-italic font-normal">articles</em>.
          </h2>

          <div>
            {articles.map((article) => (
              <ArticleRow key={article.num} article={article} />
            ))}
          </div>

          <div
            className="flex items-center justify-between mt-6 text-sm"
            style={{ color: "var(--fg-3)" }}
          >
            <span>A selection. There are others scattered across venues.</span>
            <a
              href="mailto:bruno@grossi.com.br"
              className="font-mono text-xs hover:text-[var(--accent)] transition-colors"
            >
              Contact for more ↗
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto px-6">
          <hr style={{ borderColor: "var(--line)" }} />
        </div>

        {/* Events */}
        <section id="events" className="max-w-4xl mx-auto px-6 py-20">
          <SectionTag>02 · Events</SectionTag>
          <h2
            className="text-3xl font-light mb-10"
            style={{ color: "var(--fg)" }}
          >
            Talks and{" "}
            <em className="font-serif-italic font-normal">panels</em>.
          </h2>

          <div>
            {events.map((event) => (
              <EventRow key={event.num} event={event} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-auto"
        style={{ borderColor: "var(--line)" }}
      >
        <div
          className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between text-xs font-mono"
          style={{ color: "var(--fg-3)" }}
        >
          <span>brunogrossi.com</span>
          <a
            href="mailto:bruno@grossi.com.br"
            className="hover:text-[var(--accent)] transition-colors"
          >
            bruno@grossi.com.br
          </a>
          <span>© 2025</span>
        </div>
      </footer>
    </>
  );
}
