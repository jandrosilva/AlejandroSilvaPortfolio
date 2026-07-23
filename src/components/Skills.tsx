import { Fragment } from "react";
import { skillGroups, practices } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillGlyph } from "./icons";

export function Skills() {
  return (
    <section id="skills" style={{ padding: "90px 0" }}>
      <div data-reveal>
        <SectionHeading index="02 — Skills" title="The toolkit." />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            data-reveal
            style={{
              background: "rgba(255,255,255,.85)",
              border: "1px solid rgba(23,32,51,.07)",
              borderRadius: 20,
              padding: 26,
              boxShadow: "0 26px 50px -40px rgba(23,32,51,.5)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flex: "none",
                }}
              >
                <SkillGlyph icon={g.icon} />
              </span>
              <h3 style={{ fontFamily: "var(--font-sora)", fontWeight: 600, fontSize: 18 }}>
                {g.title}
              </h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        data-reveal
        style={{
          marginTop: 18,
          background: "rgba(255,255,255,.6)",
          border: "1px dashed rgba(23,32,51,.18)",
          borderRadius: 16,
          padding: "18px 22px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".12em",
            color: "var(--color-faint)",
            textTransform: "uppercase",
            marginRight: 6,
          }}
        >
          Practices
        </span>
        {practices.map((p, i) => (
          <Fragment key={p}>
            <span style={{ fontSize: 14, color: "#46515f" }}>{p}</span>
            {i < practices.length - 1 && <span style={{ color: "#5a5750" }}>·</span>}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
