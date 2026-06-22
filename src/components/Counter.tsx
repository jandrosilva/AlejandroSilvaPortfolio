import { useEffect, useRef, useState } from "react";

/** Counts up to `target` once it scrolls into view; static under reduced motion. */
export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1100;
            const t0 = performance.now();
            const tick = (t: number) => {
              const k = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - k, 3);
              setVal(Math.round(target * eased));
              if (k < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
