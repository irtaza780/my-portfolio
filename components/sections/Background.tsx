"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed, low-cost ambient background:
 *  - deep base + two soft radial glows
 *  - faint masked grid
 *  - a cursor spotlight driven by CSS vars (rAF-throttled, pointer only)
 */
export function Background() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />

      {/* top + corner glows */}
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[34rem] w-[34rem] rounded-full bg-cyan/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 -left-40 h-[34rem] w-[34rem] rounded-full bg-violet/[0.06] blur-[130px]" />

      {/* grid */}
      <div className="grid-bg absolute inset-0" />

      {/* cursor spotlight (desktop) */}
      <div ref={spotRef} className="spotlight absolute inset-0" />

      {/* vignette so content sits on darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent_55%,rgba(3,5,11,0.85)_100%)]" />
    </div>
  );
}
