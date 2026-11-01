import { profile } from "@/Data/portfolio";
import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-[var(--line)]">
      <div className="page-shell flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div>
          <p className="display text-2xl font-semibold">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-[var(--muted)]">
            {profile.role} · {profile.location}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div className="space-y-4">
          <SocialMedia />
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
