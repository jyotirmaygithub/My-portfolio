"use client";

import { educationData } from "@/Data/portfolio";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default function EducationSection() {
  return (
    <section className="page-shell section-space">
      <Reveal>
        <p className="eyebrow">Education</p>
        <h2 className="display mt-4 text-4xl font-bold md:text-5xl">Learning path</h2>
      </Reveal>

      <div className="mt-10 space-y-5">
        {educationData.map((item, index) => (
          <Reveal key={item.school} delay={index * 0.05}>
            <SpotlightCard className="p-6 md:p-7">
              <h3 className="display text-2xl font-semibold md:text-3xl">{item.school}</h3>
              <p className="mt-2 text-lg text-accent">{item.degree}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {item.location} · {item.duration}
              </p>
              <ul className="mt-5 space-y-3 text-[var(--ink-soft)]">
                {item.notes.map((note) => (
                  <li key={note.slice(0, 32)} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
