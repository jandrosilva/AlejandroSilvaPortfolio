import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "skills", "projects", "experience", "contact"];

/**
 * Scroll-driven UI: parallax accents + active-nav tracking.
 * (Section reveals are pure CSS via animation-timeline; counters are handled
 * by the <Counter> component.) Honors prefers-reduced-motion for parallax.
 */
export function useScrollEffects() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let lastActive = "home";

    const run = () => {
      raf = 0;
      const y = window.scrollY;

      if (!reduce) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const sp = parseFloat(el.dataset.parallax ?? "0");
          el.style.transform = `translate3d(0, ${y * sp}px, 0)`;
        });
      }

      let current = "home";
      for (const id of SECTIONS) {
        const s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top <= 160) current = id;
      }
      if (current !== lastActive) {
        lastActive = current;
        setActive(current);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    run();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return active;
}
