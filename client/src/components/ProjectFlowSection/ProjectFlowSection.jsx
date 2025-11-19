import { getProjectsFlowSection } from "@/lib/strapi";
import styles from "./projectflow.module.css";
import ProjectFlowCard from "./ProjectFlowCard";


export default async function ProjectFlowSection() {
  // Fetch data from Strapi
  const data = await getProjectsFlowSection();

  if (!data || data.length === 0) return null;

  const section = data[0]; // assuming first section
  const { title, description, items } = section;

  return (
    <section className={`${styles.projects_flow_section} section_padding`}>
      <div className="main_container">
        <div className="section_top">
          <h2 className="title">{title}</h2>
          <p className="sub_title">{description}</p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <ProjectFlowCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
