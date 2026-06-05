"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  CircleAlert,
  Hammer,
  Target,
  Check,
} from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { MiniDiagram } from "../ui/MiniDiagram";

export function CaseStudies() {
  const featured = caseStudies.find((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <section id="work" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Work"
          title="Engineering case studies"
          description="Real systems shipped to production — the problem, what I built, and the measurable impact. Not a wall of screenshots."
        />

        {featured ? (
          <Reveal className="mt-12">
            <FeaturedCard study={featured} />
          </Reveal>
        ) : null}

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {rest.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.05} className="h-full">
              <StandardCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- shared bits ---------- */

function Block({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof CircleAlert;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-l-2 border-border pl-3">
      <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-faint">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function ImpactCallout({ study }: { study: CaseStudy }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/[0.06] p-3.5">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary">
          <Target className="h-3.5 w-3.5" />
          Impact
        </span>
        {study.metric ? (
          <span className="rounded-md border border-border bg-surface px-2 py-1 text-right">
            <span className="block font-mono text-sm font-semibold text-foreground">
              {study.metric.value}
            </span>
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{study.impact}</p>
    </div>
  );
}

function StackChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
    </ul>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((h) => (
        <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span className="leading-snug">{h}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- featured ---------- */

function FeaturedCard({ study }: { study: CaseStudy }) {
  return (
    <article className="panel panel-accent overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* media */}
        <div className="relative min-h-[15rem] overflow-hidden lg:min-h-full">
          {study.image ? (
            <Image
              src={study.image}
              alt={`${study.name} preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent lg:bg-gradient-to-r" />
          <div className="absolute left-5 top-5 flex items-center gap-2">
            <span className="rounded-md border border-border-strong bg-background/70 px-2 py-1 font-mono text-xs text-primary backdrop-blur">
              {study.index}
            </span>
            <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-xs font-medium text-primary backdrop-blur">
              Featured
            </span>
          </div>
        </div>

        {/* content */}
        <div className="p-6 sm:p-8">
          <span className="font-mono text-xs text-faint">{study.category}</span>
          <h3 className="mt-1.5 text-2xl font-semibold text-foreground">{study.name}</h3>

          <div className="mt-5 space-y-3.5">
            <Block icon={CircleAlert} label="Problem">
              {study.problem}
            </Block>
            <Block icon={Hammer} label="Built">
              {study.built}
            </Block>
            <ImpactCallout study={study} />
          </div>

          <div className="mt-5">
            <Highlights items={study.highlights} />
          </div>

          <div className="mt-6">
            <StackChips items={study.stack} />
          </div>

          {study.link ? (
            <a
              href={study.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              <ExternalLink className="h-4 w-4 text-primary" />
              Visit {study.link.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/* ---------- standard ---------- */

function StandardCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="panel panel-hover group flex h-full flex-col overflow-hidden">
      {/* media / diagram */}
      {study.image ? (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={study.image}
            alt={`${study.name} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-md border border-border-strong bg-background/70 px-2 py-1 font-mono text-xs text-primary backdrop-blur">
              {study.index}
            </span>
            <span className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground backdrop-blur">
              {study.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="border-b border-border bg-surface/50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-md border border-border bg-background/60 px-2 py-1 text-xs text-muted-foreground">
              {study.category}
            </span>
            <span className="font-mono text-xs text-faint">{study.index}</span>
          </div>
          {study.diagram ? <MiniDiagram nodes={study.diagram} /> : null}
        </div>
      )}

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">{study.name}</h3>
          {study.link ? (
            <a
              href={study.link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${study.link.label}`}
              className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-border-strong hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="mt-4 space-y-3.5">
          <Block icon={CircleAlert} label="Problem">
            {study.problem}
          </Block>
          <Block icon={Hammer} label="Built">
            {study.built}
          </Block>
          <ImpactCallout study={study} />
        </div>

        <div className="mt-4">
          <StackChips items={study.stack} />
        </div>

        {/* expandable details */}
        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-surface-2/60 px-3.5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
          >
            {open ? "Hide engineering details" : "View engineering details"}
            <ChevronDown
              className={`h-4 w-4 text-primary transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <Highlights items={study.highlights} />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
