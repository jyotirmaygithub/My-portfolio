"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "@/Data/portfolio";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const words = root.querySelectorAll(".hero-word");
      const bits = root.querySelectorAll("[data-hero]");

      gsap.set(words, { yPercent: 100, opacity: 0 });
      gsap.set(bits, { y: 18, opacity: 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(words, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.08 })
        .to(bits, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "-=0.35");
    }, root);

    return () => ctx.revert();
  }, []);

  const nameWords = profile.name.split(" ");

  return (
    <section ref={rootRef} className="page-shell relative pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.7fr)] lg:gap-16">
        <div>
          <div className="status-pill" data-hero>
            <span className="status-dot" />
            Open to backend / platform roles
          </div>

          <p className="eyebrow mt-8" data-hero>
            {profile.role}
          </p>

          <h1 className="display display-hero mt-4 text-[clamp(3rem,9vw,6.5rem)] font-bold text-[var(--ink)]">
            {nameWords.map((word, i) => (
              <span key={word} className="hero-line mr-[0.18em]">
                <span className={`hero-word ${i === nameWords.length - 1 ? "gradient-text" : ""}`}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-xl text-[var(--ink-soft)] md:text-2xl" data-hero>
            {profile.headline}
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
            data-hero
          >
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3" data-hero>
            <a href={profile.resumeUrl} className="btn-primary" download>
              Download resume
            </a>
            <a href="/project" className="btn-ghost">
              View projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Email me
            </a>
          </div>
        </div>

        <aside data-hero>
          <div className="panel sticky top-28 p-6 md:p-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--muted)]">
              PROFILE
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-[var(--muted)]">Based in</p>
                <p className="mt-1 text-[var(--ink)]">{profile.location}</p>
              </div>

              <div className="h-px bg-[var(--line)]" />

              <div>
                <p className="text-sm text-[var(--muted)]">Focus</p>
                <p className="mt-1 text-[var(--ink)]">APIs · Microservices · Observability</p>
              </div>

              <div className="h-px bg-[var(--line)]" />

              <div>
                <p className="text-sm text-[var(--muted)]">Connect</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
