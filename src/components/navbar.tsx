"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { navLinks, profile } from "@/Data/portfolio";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-[var(--line)] bg-black/70 backdrop-blur-xl"
    >
      <div className="page-shell flex items-center justify-between py-4">
        <Link href="/" className="display text-xl font-bold tracking-tight text-[var(--ink)]">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
          <a href={profile.resumeUrl} className="btn-primary !min-h-10 !px-4 text-sm" download>
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="btn-ghost !min-h-10 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="page-shell flex flex-col gap-4 pb-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-lg"
              data-active={pathname === link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href={profile.resumeUrl} className="btn-primary w-fit" download>
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
