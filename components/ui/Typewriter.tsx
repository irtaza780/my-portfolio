"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterProps = {
  /** Pass a STABLE (module-level) array so the loop doesn't reset on re-render. */
  words: string[];
  className?: string;
};

/**
 * Types each word out, pauses, deletes it, then moves to the next — looping.
 * Honors prefers-reduced-motion (shows the first word, statically).
 */
export function Typewriter({ words, className }: TypewriterProps) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[index % words.length];

    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        ),
      deleting ? 45 : 80
    );
    return () => clearTimeout(tick);
  }, [text, deleting, index, words, reduce]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-4 w-2 -translate-y-px animate-pulse bg-primary/80 align-middle"
      />
    </span>
  );
}
