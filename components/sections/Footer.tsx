import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border-strong bg-surface-2 font-mono text-sm font-semibold text-primary">
                {profile.initials}
              </span>
              <span className="text-sm font-medium text-foreground">{profile.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Full-stack engineer building AI workflows, cloud systems, and scalable
              products — from database to UI.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface-2 text-muted-foreground transition-colors hover:border-border-strong hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="flex gap-12 sm:gap-16">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Navigate
              </h2>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-wider text-faint">
                Direct
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resume}
                    download
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Download resume
                  </a>
                </li>
                <li className="text-muted-foreground">{profile.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-faint sm:flex-row">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="font-mono">Built with Next.js · Tailwind · Framer Motion</span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
