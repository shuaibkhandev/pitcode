import { getPartnersSection } from "@/lib/strapi";
import styles from "./PartnersSection.module.css";
import Image from "next/image";

export default async function PartnersSection() {
  const data = await getPartnersSection();
  
  if (!data) return null;

  return (
    <section className={`${styles.partner_section} section_padding section_bg`}>
<div className="main_container">
        <div className="section_top">
        <h1 className="title">{data.title}</h1>
        <p className="sub_title">{data.description}</p>

        {data.cta_text && (
          <a href={data.cta_url || "#"} className={"cta_primary"}>
            {data.cta_text}  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
          </a>
        )}
   
</div>
      <div className={styles.imageContainer}>
        <Image
          src={data.image.url}
          alt={data.image.alt}
          fill
          className={styles.image}
        />
      </div>
      </div>
    </section>
  );
}
