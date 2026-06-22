import { Counter } from "./Counter";
import { DownloadIcon, GithubIcon } from "./icons";
import { contact, stats } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-[60px]"
      style={{ minHeight: "100vh", padding: "130px 0 70px" }}
    >
      {/* LEFT: portrait */}
      <div data-parallax="-0.05" style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "18px -16px -16px 16px",
            border: "1.5px solid var(--accent)",
            borderRadius: 22,
            opacity: 0.55,
            zIndex: 0,
          }}
        />
        <div
          data-enter
          style={{
            animationDelay: ".1s",
            position: "relative",
            zIndex: 1,
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 50px 90px -45px rgba(23,32,51,.6)",
            border: "1px solid rgba(255,255,255,.7)",
          }}
        >
          <img
            src="/assets/profile.jpg"
            alt="Alejandro Silva"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              aspectRatio: "4 / 5",
              objectFit: "cover",
              objectPosition: "50% 15%",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(23,32,51,0) 50%, rgba(10,14,24,.8) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 16,
              bottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(23,32,51,.55)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,.18)",
              borderRadius: 12,
              padding: "9px 13px",
            }}
          >
            <span
              className="pulse-dot"
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#3ad17f", flex: "none" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".06em",
                color: "#fff",
              }}
            >
              SWE Intern · Greater Angels
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: statement */}
      <div>
        <div
          data-enter
          style={{
            animationDelay: ".05s",
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 24,
          }}
        >
          <span
            className="pulse-dot"
            style={{ width: 9, height: 9, borderRadius: "50%", background: "#1f9d57", flex: "none" }}
          />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".18em",
              fontWeight: 500,
              color: "#172033",
              textTransform: "uppercase",
            }}
          >
            Open to work
          </span>
          <span
            aria-hidden
            style={{
              flex: 1,
              height: 1,
              background: "linear-gradient(90deg, rgba(23,32,51,.22), transparent)",
            }}
          />
          <span
            className="hidden sm:inline"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".1em",
              color: "#8a8478",
              textTransform: "uppercase",
            }}
          >
            Software Engineer · CSUF '26
          </span>
        </div>

        <h1
          data-enter
          style={{
            animationDelay: ".14s",
            fontFamily: "var(--font-sora)",
            fontWeight: 800,
            fontSize: "clamp(44px,5vw,74px)",
            lineHeight: 1.06,
            letterSpacing: "-.035em",
            color: "#172033",
            margin: 0,
          }}
        >
          Software engineer,
          <br />
          <span
            style={{
              display: "inline-block",
              paddingBottom: ".1em",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "-.01em",
            }}
          >
            just getting started.
          </span>
        </h1>

        <p
          data-enter
          style={{
            animationDelay: ".24s",
            margin: "30px 0 0",
            maxWidth: 540,
            fontSize: 18,
            lineHeight: 1.65,
            color: "#5a5750",
          }}
        >
          I'm Alejandro Silva, a 2026 Computer Science grad from CSU Fullerton looking to break
          into software engineering. I love working on full-stack apps, building APIs, and working on clean
          interfaces, and I'm eager to keep learning and grow with a great team.
        </p>

        <div
          data-enter
          style={{
            animationDelay: ".34s",
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 34,
          }}
        >
          <a href="#projects" className="btn btn--primary">
            View Projects <span aria-hidden>→</span>
          </a>
          <a href={contact.resumeHref} download className="btn btn--ghost">
            <DownloadIcon /> Resume
          </a>
          <a href={contact.githubUrl} target="_blank" rel="noopener" className="btn btn--ghost">
            <GithubIcon /> GitHub
          </a>
        </div>

        <div
          data-enter
          style={{
            animationDelay: ".44s",
            display: "flex",
            alignItems: "flex-start",
            gap: 30,
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(23,32,51,.1)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={
                i > 0
                  ? { paddingLeft: 30, borderLeft: "1px solid rgba(23,32,51,.12)" }
                  : undefined
              }
            >
              <div
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 700,
                  fontSize: 30,
                  color: "#172033",
                  letterSpacing: "-.02em",
                }}
              >
                {s.value === null ? (
                  s.display
                ) : (
                  <Counter target={s.value} suffix={s.suffix} />
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: ".14em",
                  color: "#8a8478",
                  textTransform: "uppercase",
                  marginTop: 5,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
