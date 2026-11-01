"use client";

import { experienceData } from "@/Data/portfolio";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default function ExperienceList({ limit }: { limit?: number }) {
  const items = limit ? experienceData.slice(0, limit) : experienceData;

  return (
    <section className="page-shell section-space">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="display mt-4 text-4xl font-bold md:text-5xl">Where I&apos;ve shipped</h2>
          </div>
          {limit ? (
            <a href="/experience" className="btn-ghost">
              Full timeline
            </a>
          ) : null}
        </div>
      </Reveal>

      <div className="timeline mt-10 space-y-5 pl-8 md:pl-10">
        {items.map((job, index) => (
          <Reveal key={`${job.company}-${job.role}-${job.duration}`} delay={index * 0.06}>
            <div className="relative">
              <span className="timeline-dot" />
              <SpotlightCard className="p-6 md:p-7">
                <h3 className="display text-2xl font-semibold md:text-3xl">{job.company}</h3>
                <p className="mt-1 text-lg text-accent">{job.role}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {job.location} · {job.duration}
                </p>

                <ul className="mt-5 space-y-3 text-[var(--ink-soft)]">
                  {job.highlights.map((item) => (
                    <li key={item.slice(0, 40)} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
