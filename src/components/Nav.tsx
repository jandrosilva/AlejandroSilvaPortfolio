const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About", hideSm: true },
  { id: "skills", label: "Skills", hideSm: true },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience", hideSm: true },
];

export function Nav({ active }: { active: string }) {
  return (
    <header className="fixed inset-x-0 top-[18px] z-50 flex justify-center px-4">
      <nav
        className="flex items-center gap-1 rounded-full"
        style={{
          background: "rgba(255,255,255,.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.9)",
          boxShadow:
            "0 12px 34px -16px rgba(23,32,51,.4), inset 0 1px 0 rgba(255,255,255,.7)",
          padding: "7px 8px",
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={[
              "navlink",
              l.hideSm ? "hidden sm:inline-flex" : "",
              active === l.id ? "is-active" : "",
            ].join(" ")}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="navlink navlink--cta">
          Contact
        </a>
      </nav>
    </header>
  );
}
