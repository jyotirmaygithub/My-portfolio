"use client";

import { skillGroups } from "@/Data/portfolio";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";

export default function Skills() {
  return (
    <section className="page-shell section-space">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 className="display mt-4 text-4xl font-bold md:text-5xl">What I work with</h2>
        <p className="mt-4 max-w-2xl text-[var(--muted)]">
          Stack shaped by production APIs, event-driven services, AI workflows, and delivery
          pipelines.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <SpotlightCard className="h-full p-5">
              <h3 className="display text-xl font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
