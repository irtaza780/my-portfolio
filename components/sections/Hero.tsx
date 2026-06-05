"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Layers } from "lucide-react";
import { profile, heroChips, systemStatus } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import { Typewriter } from "../ui/Typewriter";

const heroCommands = [
  "build scalable-systems",
  "ship ai-workflows",
  "optimize cloud-costs",
  "deploy --production",
];

const line = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };

  return (
    <section id="top" className="relative px-4 pt-28 pb-16 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — positioning */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={line}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Available for Full-Stack / AI Engineering roles
            </span>
          </motion.div>

          <motion.p variants={line} className="eyebrow mt-6">
            {profile.name}
          </motion.p>

          <motion.h1
            variants={line}
            className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            I build scalable full-stack products,{" "}
            <span className="text-gradient">AI workflows</span> &{" "}
            <span className="text-gradient">cloud systems</span> that solve real
            business problems.
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-5 text-base font-medium text-foreground/90 sm:text-lg"
          >
            {profile.title}
            <span className="text-faint"> — </span>
            <span className="text-muted-foreground">{profile.tagline}</span>
          </motion.p>

          <motion.p
            variants={line}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {profile.intro}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={line} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(91,151,255,0.7)] transition-transform hover:scale-[1.03]"
            >
              <Layers className="h-4 w-4" />
              View Case Studies
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-border-strong"
            >
              <Mail className="h-4 w-4 text-primary" />
              Contact Me
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          {/* Skill chips */}
          <motion.ul variants={line} className="mt-8 flex flex-wrap gap-2">
            {heroChips.map((chip) => (
              <li key={chip} className="chip">
                <span className="h-1 w-1 rounded-full bg-primary/70" />
                {chip}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right — system status terminal */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          className="relative"
        >
          <div className="aurora absolute -inset-6 opacity-70" />
          <StatusTerminal />
          {/* floating mini badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="panel absolute -bottom-5 -left-4 hidden items-center gap-2 px-3 py-2 text-xs sm:flex"
          >
            <span className="font-mono text-emerald">●</span>
            <span className="text-muted-foreground">uptime</span>
            <span className="font-mono text-foreground">production-ready</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusTerminal() {
  const reduce = useReducedMotion();
  const rows = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.5 } },
  };
  const row = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="panel panel-accent relative overflow-hidden">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-faint">system.status — {profile.shortName}</span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> LIVE
        </span>
      </div>

      {/* body */}
      <motion.div
        variants={rows}
        initial="hidden"
        animate="show"
        className="space-y-3 p-5 font-mono text-sm"
      >
        <motion.div variants={row} className="text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </motion.div>
        <motion.div variants={row} className="pl-4 text-foreground">
          {profile.name.toLowerCase().replace(/ /g, "_")}
        </motion.div>

        <motion.div variants={row} className="pt-1 text-muted-foreground">
          <span className="text-primary">$</span> status --now
        </motion.div>

        {systemStatus.map((s) => (
          <motion.div
            key={s.key}
            variants={row}
            className="flex flex-col gap-0.5 pl-4 sm:flex-row sm:gap-3"
          >
            <span className="w-20 shrink-0 text-[11px] uppercase tracking-wider text-faint">
              {s.label}
            </span>
            <span
              className={`text-[13px] leading-snug ${
                s.accent === "emerald" ? "text-emerald" : "text-foreground/90"
              }`}
            >
              {s.value}
            </span>
          </motion.div>
        ))}

        <motion.div variants={row} className="flex items-center gap-1.5 pt-1">
          <span className="text-primary">$</span>
          <Typewriter words={heroCommands} className="text-foreground/80" />
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-faint">
        <span className="inline-flex items-center gap-1.5">
          <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
          scroll to explore the system
        </span>
        <span className="font-mono">v2025.1</span>
      </div>
    </div>
  );
}
