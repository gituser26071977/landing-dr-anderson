import { Metadata } from "next";
import { SobreHero } from "./sections/SobreHero";
import { SobreMedicine } from "./sections/SobreMedicine";
import { SobreTech } from "./sections/SobreTech";
import { SobreTeaching } from "./sections/SobreTeaching";
import { SobreProjects } from "./sections/SobreProjects";
import { SobreNavigation } from "./components/SobreNavigation";
import { Footer } from "../sections/Footer";

export const metadata: Metadata = {
  title: "Trajetória & Projetos | Dr. Anderson Holzwarth",
  description: "Conheça a trajetória multidisciplinar do Dr. Anderson Holzwarth: medicina, tecnologia, inteligência artificial e criação.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C9A962] selection:text-black">
      <SobreNavigation />
      <SobreHero />
      <SobreMedicine />
      <SobreTech />
      <SobreTeaching />
      <SobreProjects />
      <Footer dark />
    </main>
  );
}
