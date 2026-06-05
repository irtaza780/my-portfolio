"use client";

import { ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of shipping"
          description="Three roles, one throughline: owning features end-to-end and putting them in production."
        />

        <div className="relative mt-12">
          {/* continuous rail */}
          <span
            aria-hidden
            className="absolute left-4 top-2 bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-border-strong via-border to-transparent sm:left-5"
          />

          <ol className="space-y-6">
            {experience.map((role, i) => (
              <li
                key={`${role.company}-${role.period}`}
                className="grid grid-cols-[2rem_1fr] gap-4 sm:grid-cols-[2.5rem_1fr]"
              >
                {/* node */}
                <div className="relative">
                  <span className="absolute left-1/2 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border border-border-strong bg-background">
                    {role.current ? (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/70 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                      </span>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </span>
                </div>

                {/* card */}
                <Reveal delay={i * 0.05}>
                  <div className="panel panel-hover p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs tracking-wide text-faint">
                        {role.period}
                      </span>
                      {role.current ? (
                        <span className="rounded-full border border-emerald/30 bg-emerald/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald">
                          Current
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-foreground">{role.role}</h3>
                    <p className="text-sm font-medium text-primary">{role.company}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {role.summary}
                    </p>

                    <ul className="mt-3.5 space-y-1.5">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {role.stack.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
