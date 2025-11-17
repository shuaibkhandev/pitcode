import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getHeroByPage } from "@/lib/strapi";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";

export default async function Home() {
    const hero = await getHeroByPage("home");
  return (
   <main>
     {hero && <Hero data={hero} />}
     <ProjectsSection />
     <ClientsSection />
     <ProcessSection/>
   </main>
  );
}
