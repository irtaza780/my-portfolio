"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  LayoutDashboard,
  Server,
  Database,
  Cloud,
  Sparkles,
  Plug,
} from "lucide-react";
import { stackGroups } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const icons = {
  LayoutDashboard,
  Server,
  Database,
  Cloud,
  Sparkles,
  Plug,
} as const;

export function TechStack() {
  const [activeId, setActiveId] = useState(stackGroups[0].id);
  const active = stackGroups.find((g) => g.id === activeId) ?? stackGroups[0];

  return (
    <section id="stack" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Stack"
          title="The stack, as a command explorer"
          description="Pick a category to browse the tools I build with day to day."
        />

        <Reveal className="mt-12">
          <div className="panel overflow-hidden">
            {/* command bar */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">
                stack<span className="text-faint"> — explorer</span>
              </span>
              <span className="ml-auto hidden items-center gap-1 font-mono text-[11px] text-faint sm:flex">
                <kbd className="rounded border border-border bg-surface-2 px-1.5 py-0.5">⌘</kbd>
                <kbd className="rounded border border-border bg-surface-2 px-1.5 py-0.5">K</kbd>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
              {/* categories */}
              <div className="border-b border-border p-2 md:border-b-0 md:border-r">
                <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
                  {stackGroups.map((group) => {
                    const Icon = icons[group.icon as keyof typeof icons] ?? LayoutDashboard;
                    const isActive = group.id === activeId;
                    return (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setActiveId(group.id)}
                        aria-pressed={isActive}
                        className={`group flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition-colors md:w-full ${
                          isActive
                            ? "bg-surface-2 text-foreground"
                            : "text-muted-foreground hover:bg-surface-2/60 hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-md border ${
                            isActive
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border bg-surface text-muted-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 truncate font-medium">{group.label}</span>
                        <span className="ml-auto hidden shrink-0 pl-2 font-mono text-[11px] text-faint md:block">
                          {group.items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* items */}
              <div className="p-5 sm:p-6">
                <div className="mb-5">
                  <h3 className="text-base font-semibold text-foreground">{active.label}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{active.blurb}</p>
                </div>

                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className="grid grid-cols-2 gap-2.5 lg:grid-cols-3"
                >
                  {active.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3.5 py-2.5 transition-colors hover:border-border-strong"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                        <span className="truncate text-sm text-foreground">{item.name}</span>
                      </span>
                      {item.note ? (
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-faint">
                          {item.note}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
