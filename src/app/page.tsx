import Image from "next/image";
import Footer from "@/components/footer"
import Breadcrumbs from "@/components/breadCrumbs"
import Intro from "@/components/content/intro"

export default function Home() {
  return (
  <div>
    <Breadcrumbs/>
    <Intro/>
    <Footer/>
  </div>
  );
}
