"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Terminal,
  Mail,
  Github,
  Linkedin,
  Phone,
  Download,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { profile, contactCta } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { Typewriter } from "../ui/Typewriter";

const contactCommands = [
  "open to opportunities",
  "let's build something",
  "usually replies < 24h",
  "available for projects",
];

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: `/${profile.linkedinHandle}`, href: profile.linkedin, external: true },
  { label: "GitHub", value: `/${profile.githubHandle}`, href: profile.github, external: true },
  { label: "Resume", value: "download.pdf", href: profile.resume, download: true },
];

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Phone, href: profile.phoneHref, label: "Phone" },
];

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="panel panel-accent overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* terminal */}
              <div className="border-b border-border lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-faint">
                    <Terminal className="h-3.5 w-3.5" />
                    contact — {profile.shortName}
                  </span>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 } },
                  }}
                  className="space-y-2.5 p-5 font-mono text-sm sm:p-6"
                >
                  <motion.p variants={lineVariant} className="text-foreground">
                    <span className="text-primary">&gt;</span> contact --role{" "}
                    <span className="text-cyan">full-stack-ai-engineer</span>
                  </motion.p>
                  <motion.p variants={lineVariant} className="text-faint">
                    initializing secure channel...
                  </motion.p>

                  {channels.map((c) => (
                    <motion.a
                      key={c.label}
                      variants={lineVariant}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      download={c.download ? "" : undefined}
                      className="group flex items-center gap-3 rounded-md px-2 py-1.5 -mx-2 transition-colors hover:bg-surface-2"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald" />
                      <span className="w-20 shrink-0 text-faint">{c.label}</span>
                      <span className="truncate text-foreground transition-colors group-hover:text-primary">
                        {c.value}
                      </span>
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-faint opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.a>
                  ))}

                  <motion.p variants={lineVariant} className="flex items-center gap-1.5 pt-1">
                    <span className="text-primary">$</span>
                    <Typewriter words={contactCommands} className="text-foreground/80" />
                  </motion.p>
                </motion.div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />
                  <span className="eyebrow">Contact</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Let&apos;s build something solid
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {contactCta}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_rgba(91,151,255,0.7)] transition-transform hover:scale-[1.03]"
                  >
                    <Mail className="h-4 w-4" />
                    Email me
                  </a>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
                  >
                    <Download className="h-4 w-4 text-primary" />
                    Resume
                  </a>
                </div>

                <div className="mt-7 flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface-2 text-muted-foreground transition-colors hover:border-border-strong hover:text-primary"
                    >
                      <s.icon className="h-[1.15rem] w-[1.15rem]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const lineVariant = {
  hidden: { opacity: 0, x: -6 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};
