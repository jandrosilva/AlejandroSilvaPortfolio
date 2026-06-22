import { experience } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" style={{ padding: "90px 0" }}>
      <div data-reveal>
        <SectionHeading index="04 — Experience" title="The path so far." />
      </div>

      <div style={{ position: "relative", marginTop: 46, paddingLeft: 34 }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 7,
            top: 6,
            bottom: 6,
            width: 2,
            background: "linear-gradient(180deg,var(--accent),rgba(156,123,67,.12))",
          }}
        />
        {experience.map((e) => (
          <div
            key={e.role + e.period}
            data-reveal
            style={{ position: "relative", marginBottom: 26 }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                left: -34,
                top: 24,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#fff",
                border: "3px solid var(--accent)",
                boxShadow: "0 0 0 4px #efece5",
              }}
            />
            <div
              style={{
                background: "rgba(255,255,255,.85)",
                border: "1px solid rgba(23,32,51,.07)",
                borderRadius: 18,
                padding: "22px 24px",
                boxShadow: "0 24px 46px -40px rgba(23,32,51,.5)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  alignItems: "baseline",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: 19 }}>
                  {e.role}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {e.period}
                </span>
              </div>
              <div style={{ fontSize: 14, color: "#5a5750", marginTop: 3 }}>{e.org}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#46515f", marginTop: 12 }}>
                {e.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
