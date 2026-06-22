export function Footer() {
  return (
    <footer
      style={{
        padding: "34px 0 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 14,
        borderTop: "1px solid rgba(23,32,51,.18)",
        marginTop: 20,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-sora)",
          fontWeight: 600,
          fontSize: 16,
          color: "#172033",
        }}
      >
        Alejandro Silva
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#5a5750" }}>
        © 2026 · Built with care
      </div>
    </footer>
  );
}
