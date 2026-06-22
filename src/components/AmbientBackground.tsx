type Dot = {
  p: string;
  top: number;
  left?: string;
  right?: string;
  size: number;
  bg: string;
  opacity: number;
};

const DOTS: Dot[] = [
  { p: "0.25", top: 160, left: "5%", size: 10, bg: "var(--accent)", opacity: 0.5 },
  { p: "0.5", top: 430, left: "14%", size: 7, bg: "#172033", opacity: 0.35 },
  { p: "0.35", top: 300, right: "8%", size: 9, bg: "var(--accent)", opacity: 0.4 },
  { p: "0.18", top: 680, right: "18%", size: 6, bg: "#172033", opacity: 0.3 },
];

export function AmbientBackground() {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(1100px 700px at 78% -8%, #ffffff 0%, rgba(255,255,255,0) 60%), radial-gradient(900px 600px at 8% 12%, #e7e1d6 0%, rgba(231,225,214,0) 55%), linear-gradient(180deg,#efece5 0%, #e8e4dc 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.5,
          backgroundImage:
            "linear-gradient(rgba(23,32,51,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(23,32,51,.045) 1px,transparent 1px)",
          backgroundSize: "42px 42px",
          animation: "gridpan 22s linear infinite",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
          maskImage: "radial-gradient(circle at 50% 30%, #000 0%, transparent 72%)",
        }}
      />
      {DOTS.map((d, i) => (
        <div
          key={i}
          data-parallax={d.p}
          aria-hidden
          style={{
            position: "absolute",
            top: d.top,
            left: d.left,
            right: d.right,
            width: d.size,
            height: d.size,
            background: d.bg,
            opacity: d.opacity,
          }}
        />
      ))}
    </>
  );
}
