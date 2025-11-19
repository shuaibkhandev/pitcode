import { getProcessSection } from "@/lib/strapi";
import styles from "./ProcessSection.module.css";

export default async function ProcessSection() {
  const data = await getProcessSection();

  if (!data) return null;

  const { title, sub_title, steps } = data;

  return (
    <section className={`${styles.process_section} section_padding section_bg`}>
      <div className="main_container">
        <div className="section_top">
          <h2 className="title">{title}</h2>
          <p className="sub_title">{sub_title}</p>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.number}>{step.number}</div>

              <h3 className={styles.title}>{step.title}</h3>
              <p className={`${styles.desc} secondary_text`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
