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
              Full-stack engineer,
              <br />
              strongest at the interface.
            </>
          }
        />
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <div data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#46515f" }}>
          <p style={{ marginBottom: 18 }}>
            I'm a software engineer and{" "}
            <strong style={{ color: "#172033" }}>B.S. Computer Science</strong> graduate
            from{" "}
            <strong style={{ color: "#172033" }}>
              CSU Fullerton's College of Engineering &amp; Computer Science
            </strong>
            . What I like most about building software is the whole arc of it: sitting with a problem
            until I understand it, modeling the data, writing the API, and then building an interface
            people actually want to use.
          </p>
          <p style={{ marginBottom: 18 }}>
            I build across the stack, and the front-end is where I do my sharpest work. I've built
            React and TypeScript interfaces backed by REST and GraphQL APIs, including a recommendation
            engine that pulls from a live external API, and a municipal app that modernizes how a public
            library registers patrons. I care about the details that make an interface feel considered
            rather than merely functional, including accessibility and performance.
          </p>
          <p>
            I pair that work with AI development tools to move from an idea to a working product faster,
            and I've put real effort into using them well, reviewing and validating what they produce
            rather than leaning on them as a crutch. I'd much rather understand my own code than ship
            something I can't explain.
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
                    color: "var(--color-faint)",
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
