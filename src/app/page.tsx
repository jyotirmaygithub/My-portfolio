import Intro from "@/components/content/intro";
import AboutMe from "@/components/content/me";
import Skillset from "@/Layout/skillset";

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Skillset />
    </div>
  );
}
