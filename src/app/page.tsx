import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import ExperienceList from "@/components/sections/experience-list";
import ProjectGrid from "@/components/sections/project-grid";
import SkillsMarquee from "@/components/sections/marquee";

export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsMarquee />
      <About />
      <ExperienceList limit={2} />
      <ProjectGrid mode="featured" />
      <Skills />
    </div>
  );
}
