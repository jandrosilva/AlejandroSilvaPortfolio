import type { ReactNode } from "react";

export function SectionHeading({ index, title }: { index: string; title: ReactNode }) {
  return (
    <>
      <div className="eyebrow">{index}</div>
      <h2
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 700,
          fontSize: "clamp(34px,4.2vw,52px)",
          letterSpacing: "-.025em",
          marginTop: 14,
          lineHeight: 1.04,
        }}
      >
        {title}
      </h2>
    </>
  );
}
