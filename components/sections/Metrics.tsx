"use client";

import { Check } from "lucide-react";
import { metrics, impactNotes } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Metrics() {
  return (
    <section id="impact" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Impact"
          title="Outcomes, not just output"
          description="A few numbers that stand behind the work. Figures are targets and estimates drawn from real projects."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="h-full">
              <div className="panel panel-hover relative h-full overflow-hidden p-6">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl"
                />
                <div className="font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                  {m.value}
                </div>
                <div className="mt-3 text-sm font-semibold text-foreground">{m.label}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="panel p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {impactNotes.map((note) => (
                <div key={note} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-snug text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
