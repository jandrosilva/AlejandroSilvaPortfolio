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
              from the data up to the interface.
            </>
          }
        />
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.3fr_1fr]">
        <div data-reveal style={{ fontSize: 18, lineHeight: 1.7, color: "#46515f" }}>
          <p style={{ marginBottom: 18 }}>
            I'm a software engineer and a{" "}
            <strong style={{ color: "#172033" }}>computer science graduate</strong> from{" "}
            <strong style={{ color: "#172033" }}>CSU Fullerton</strong>. I'm passionate about
            engineering and using technology to solve real problems. So far in my journey, I've spent
            the last few months building projects for the library I work at in Orange, and building a
            better way to find shows as an avid anime viewer.
          </p>
          <p style={{ marginBottom: 18 }}>
            I've grown passionate about using my skills to help my community and people who enjoy the
            things I enjoy.
          </p>
          <p style={{ marginBottom: 18 }}>
            I work across the stack, but I love building the front-end. It feels expressive to me, and
            it's where I can showcase my strongest work, using React, TypeScript, and Vite. I'm versed
            in back-end technologies too. The apps I've helped develop have had me writing database
            queries, building APIs, and putting together my own recommendation system.
          </p>
          <p>
            Right now I'm using AI tools like Claude Code and Gemini to work more efficiently,
            strengthen my understanding of new technologies, and debug cleanly, while still testing
            myself on what I've built. I hope to find a home somewhere I can be passionate about the
            mission and use what I have to help push things forward.
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
