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
              Aspiring Software Engineer,
              <br />
              looking to build a better future.
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
            . What I like most about building software is the whole arc of it: sitting with a problem
            until I understand it, modeling the data, writing the API, and then building an interface
            people actually want to use.
          </p>
          <p style={{ marginBottom: 18 }}>
            I'm most drawn to the backend. I've designed relational schemas, written REST APIs, and 
            built full-stack applications from the data layer up, including a recommendation engine
             that pulls from a live external API, and a municipal app that modernizes how a public 
             library registers patrons. I pair that work with AI tools to help me move from an idea
              to a working product faster, and I've spent time learning how to use those tools efficiently
              rather than just relying on them as a crutch.
          </p>
          <p>
            I am early in my career and I know it, which mostly means that I am passionate about getting
             better. I am honest about my skillset and my abilities because I truly believe, I'd much rather
             ask questions than pretend I have it all figured out.
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
