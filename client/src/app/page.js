import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getHeroByPage } from "@/lib/strapi";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ClientsSection from "@/components/ClientsSection/ClientsSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectFlowSection from "@/components/ProjectFlowSection/ProjectFlowSection";
import PartnersSection from "@/components/PartnersSection/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default async function Home() {
    const hero = await getHeroByPage("home");
  return (
   <main>
     {hero && <Hero data={hero} />}
     <ProjectsSection />
     <ClientsSection />
     <ProcessSection/>
     <ServicesSection/>
     <ProjectFlowSection/>
      <PartnersSection />
      <TestimonialsSection/>
   </main>
  );
}
