"use client";

import Image from "next/image";
import { openSourceProjects, projects } from "@/Data/portfolio";
import Reveal from "@/components/motion/Reveal";
import SpotlightCard from "@/components/motion/SpotlightCard";

type Project = (typeof projects)[number] | (typeof openSourceProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  const screenshot = "screenshot" in project ? project.screenshot : undefined;

  return (
    <SpotlightCard className="flex h-full flex-col overflow-hidden">
      {screenshot ? (
        <div className="relative h-44 w-full border-b border-[var(--line)] bg-[#0c1219]">
          <Image
            src={screenshot}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {"subtitle" in project && project.subtitle ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {project.subtitle}
          </p>
        ) : null}
        <h3 className="display mt-2 text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 text-[var(--ink-soft)]">{project.desc}</p>
        {"impact" in project && project.impact ? (
          <p className="mt-3 text-sm text-[var(--muted)]">{project.impact}</p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {"links" in project && project.links?.length ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                {link.label} →
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-auto pt-6 text-sm text-[var(--muted)]">
            Production system · private codebase
          </p>
        )}
      </div>
    </SpotlightCard>
  );
}

export default function ProjectGrid({
  mode = "all",
}: {
  mode?: "all" | "featured" | "open-source";
}) {
  const list =
    mode === "open-source"
      ? openSourceProjects
      : mode === "featured"
        ? projects.slice(0, 4)
        : projects;

  return (
    <section className="page-shell section-space">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{mode === "open-source" ? "Open Source" : "Projects"}</p>
            <h2 className="display mt-4 text-4xl font-bold md:text-5xl">
              {mode === "open-source" ? "Shared work" : "Systems & products"}
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              {mode === "open-source"
                ? "Contributions and collaborations beyond day-job code."
                : "Production platforms from recent roles, plus selected personal builds."}
            </p>
          </div>
          {mode === "featured" ? (
            <a href="/project" className="btn-ghost">
              All projects
            </a>
          ) : null}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {list.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
