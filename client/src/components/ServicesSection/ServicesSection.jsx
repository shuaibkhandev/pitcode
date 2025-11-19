import styles from "./services.module.css";
import ServiceCard from "./ServiceCard";
import { getServicesSection } from "@/lib/strapi";

export default async function ServicesSection() {
  const sections = await getServicesSection();
  const services = sections[0]?.services || [];

  return (
<section className={`${styles.services_section} section_padding`}>
      <div className="main_container">
        <div className={`section_top ${styles.section_top}`}>
        <h2 className={`title ${styles.title}`}>{sections[0]?.title}</h2>
</div>
        <div className={styles.wrapper}>
          {services.map((service, idx) => (
            <ServiceCard key={service.id} index={idx} data={{
              badge: {
                label: service.badge_label,
                icon: service.badge_icon?.url
              },
              title: service.title,
              description: service.description,
              types: service.service_type?.map(t => t.label),
              image: service.image?.url
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
