import Image from "next/image";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadCrumbs";
import Intro from "@/components/content/intro";
import AboutMe from "@/components/content/me";
import Skillset from "@/Layout/skillset";

export default function Home() {
  return (
    <div>
      <Breadcrumbs />
      <Intro />
      <AboutMe />
      <Skillset />
      <Footer />
    </div>
  );
}
