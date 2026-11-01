"use client";

import { skillGroups } from "@/Data/portfolio";

export default function SkillsMarquee() {
  const items = skillGroups.flatMap((group) => group.items).slice(0, 16);
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
