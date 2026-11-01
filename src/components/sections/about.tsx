"use client";

import Image from "next/image";
import { about } from "@/Data/portfolio";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  return (
    <section className="page-shell section-space">
      <Reveal>
        <p className="eyebrow">{about.heading}</p>
        <h2 className="display mt-4 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
          Backend systems with sharp edges — security, queues, and shipping.
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
        <Reveal className="min-w-0 flex-1 space-y-5 text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <div className="mx-auto w-[280px] shrink-0 sm:w-[320px] md:mx-0 md:w-[340px]">
          <div className="panel overflow-hidden p-2">
            <div className="relative aspect-square overflow-hidden rounded-[12px]">
              <Image
                src={about.image}
                alt="Jyotirmay Gupta"
                fill
                className="object-cover"
                sizes="340px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
