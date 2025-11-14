import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import { getHeroByPage } from "@/lib/strapi";

export default async function Home() {
    const hero = await getHeroByPage("home");
  return (
   <main>
     {hero && <Hero data={hero} />}
   </main>
  );
}
