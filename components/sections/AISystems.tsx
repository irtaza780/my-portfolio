"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link2, Search, Cpu, Braces, Send, Workflow, Terminal } from "lucide-react";
import { aiPipeline, aiCapabilities, aiNote } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const icons = { Link: Link2, Search, Cpu, Braces, Send } as const;

export function AISystems() {
  const reduce = useReducedMotion();

  return (
    <section id="ai-systems" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="AI / LLM Engineering"
          title="AI systems, wired into real products"
          description="I build practical AI features — not chat demos. Each workflow moves from raw input to a structured, delivered result."
        />

        {/* Pipeline */}
        <Reveal className="mt-12">
          <div className="panel p-5 sm:p-8">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs text-faint">
              <Workflow className="h-4 w-4 text-primary" />
              workflow.pipeline
            </div>

            <motion.ol
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
              }}
              className="flex flex-col lg:flex-row lg:items-stretch"
            >
              {aiPipeline.map((step, i) => {
                const Icon = icons[step.icon as keyof typeof icons] ?? Cpu;
                return (
                  <Fragment key={step.label}>
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                      }}
                      className="flex-1"
                    >
                      <div className="panel h-full p-4 text-center">
                        <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                          step {i + 1}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-foreground">
                          {step.label}
                        </div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{step.sub}</div>
                      </div>
                    </motion.li>

                    {i < aiPipeline.length - 1 ? <Connector /> : null}
                  </Fragment>
                );
              })}
            </motion.ol>
          </div>
        </Reveal>

        {/* Capabilities + note */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="h-full">
            <div className="panel h-full p-6 sm:p-7">
              <h3 className="text-sm font-semibold text-foreground">In the toolbox</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The pieces I reach for when building AI features.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {aiCapabilities.map((c) => (
                  <li key={c} className="chip">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div className="panel panel-accent h-full overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3 font-mono text-xs text-faint">
                <Terminal className="h-4 w-4 text-primary" />
                note.md
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{aiNote}</p>
                <div className="mt-5 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="text-primary">in</span>{" "}
                  <span className="text-foreground">&quot;property-url&quot;</span>
                  <br />
                  <span className="text-faint">→ scrape → analyze → reason → format</span>
                  <br />
                  <span className="text-primary">out</span>{" "}
                  <span className="text-emerald">structured_report.pdf</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div
      aria-hidden
      className="flex shrink-0 items-center justify-center py-1 lg:w-8 lg:py-0"
    >
      {/* mobile: vertical */}
      <svg width="2" height="26" className="lg:hidden" viewBox="0 0 2 26">
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="26"
          stroke="var(--primary)"
          strokeOpacity="0.5"
          strokeWidth="2"
          className="flow-dash"
        />
      </svg>
      {/* desktop: horizontal */}
      <svg width="40" height="2" className="hidden lg:block" viewBox="0 0 40 2">
        <line
          x1="0"
          y1="1"
          x2="40"
          y2="1"
          stroke="var(--primary)"
          strokeOpacity="0.5"
          strokeWidth="2"
          className="flow-dash"
        />
      </svg>
    </div>
  );
}
