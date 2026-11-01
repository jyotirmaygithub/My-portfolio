import React from "react";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { profile } from "@/Data/portfolio";

export default function SocialMedia() {
  const data = [
    { url: profile.linkedin, icon: <LinkedIn fontSize="small" />, label: "LinkedIn" },
    { url: profile.github, icon: <GitHub fontSize="small" />, label: "GitHub" },
    { url: `mailto:${profile.email}`, icon: <Mail fontSize="small" />, label: "Email" },
  ];

  return (
    <div className="flex items-center gap-3">
      {data.map((item) => (
        <a
          href={item.url}
          key={item.label}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/5 text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
