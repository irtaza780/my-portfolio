"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { about, profile } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <section id="about" className="section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        {/* portrait */}
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="aurora absolute -inset-5 opacity-40" />
            <div className="panel panel-accent relative overflow-hidden p-2">
              <div className="relative aspect-square overflow-hidden rounded-[0.7rem]">
                <Image
                  src="/portfolio-image.jpg"
                  alt="Portrait of Syed Muhammad Irtaza"
                  fill
                  sizes="(max-width: 1024px) 90vw, 360px"
                  className="object-cover object-center grayscale contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="text-sm font-semibold text-foreground">{profile.name}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {profile.title} · {profile.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="panel absolute -right-3 -top-3 hidden px-3 py-2 font-mono text-xs text-muted-foreground sm:block">
              <span className="text-emerald">●</span> open to work
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={0.08} className="order-2">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />
            <span className="eyebrow">About</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Engineer who ships business outcomes
          </h2>

          <div className="mt-5 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="panel p-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
