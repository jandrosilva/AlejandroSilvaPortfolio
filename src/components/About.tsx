import { aboutCards } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" style={{ padding: "90px 0" }}>
      <div data-reveal>
        <SectionHeading
          index="01 — About"
          title={
            <>
              Engineer by training,
              <br />
              builder by instinct.
            </>
          }
        />
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <div data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#46515f" }}>
          <p style={{ marginBottom: 18 }}>
            I'm a software engineer and recent{" "}
            <strong style={{ color: "#172033" }}>B.S. Computer Science</strong> graduate
            from{" "}
            <strong style={{ color: "#172033" }}>
              CSU Fullerton's College of Engineering &amp; Computer Science
            </strong>
            . I like the full arc of building software — gathering requirements, modeling
            the data, writing the API, and shipping an interface people actually want to
            use.
          </p>
          <p style={{ marginBottom: 18 }}>
            My comfort zone runs deep on the backend: relational schema design, query
            optimization, and clean REST APIs. Lately I've been pairing that with
            AI-assisted development and LLM integration to ship 0→1 products faster.
          </p>
          <p>
            I care about readable code, honest documentation, and the small details that
            make a product feel finished.
          </p>
        </div>

        <div data-reveal className="flex flex-col gap-3.5">
          {aboutCards.map((c) =>
            c.dark ? (
              <div
                key={c.label}
                style={{
                  background: "#172033",
                  borderRadius: 16,
                  padding: "18px 20px",
                  boxShadow: "0 22px 40px -30px rgba(23,32,51,.7)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".12em",
                    color: "rgba(255,255,255,.55)",
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 600,
                    fontSize: 17,
                    marginTop: 6,
                    color: "#fff",
                  }}
                >
                  {c.title}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,.7)", marginTop: 2 }}>
                  {c.sub}
                </div>
              </div>
            ) : (
              <div key={c.label} className="card" style={{ padding: "18px 20px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: ".12em",
                    color: "#8a8478",
                    textTransform: "uppercase",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontWeight: 600,
                    fontSize: 17,
                    marginTop: 6,
                    color: "#172033",
                  }}
                >
                  {c.title}
                </div>
                <div style={{ fontSize: 14, color: "#5a5750", marginTop: 2 }}>{c.sub}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
