import { projects, contact } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" style={{ padding: "90px 0" }}>
      <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionHeading index="03 — Projects" title="Selected work." />
        </div>
        <a
          href={contact.githubUrl}
          target="_blank"
          rel="noopener"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            fontWeight: 600,
            color: "#172033",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderBottom: "2px solid var(--accent)",
            paddingBottom: 3,
          }}
        >
          All repos on GitHub <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener"
            data-reveal
            className="proj-card"
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 10",
                backgroundImage:
                  "repeating-linear-gradient(135deg,#eef1f5 0 14px,#e4e8ee 14px 28px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid rgba(23,32,51,.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  color: "#a9a294",
                  textTransform: "uppercase",
                }}
              >
                {p.shot}
              </span>
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#fff",
                  background: "#172033",
                  padding: "4px 9px",
                  borderRadius: 7,
                }}
              >
                {p.tag}
              </span>
            </div>
            <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  fontSize: 20,
                  letterSpacing: "-.01em",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#5a5750",
                  marginTop: 8,
                  flex: 1,
                }}
              >
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
                {p.stack.map((s) => (
                  <span key={s} className="stack-chip">
                    {s}
                  </span>
                ))}
              </div>
              <span
                style={{
                  marginTop: 18,
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#172033",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                }}
              >
                {p.cta} <span aria-hidden>→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
