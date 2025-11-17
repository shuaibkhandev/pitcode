import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import styles from "./projects.module.css";
import { getProjectsSection } from "@/lib/strapi";


const ProjectsSection = async  () => {
     const projects = await getProjectsSection();

  if (!projects || projects.length === 0) return null;

  return (
     <section className={`${styles.section} section_bg`}>
        <div className="main_container">
   <SectionHeading 
          title={projects[0].title} 
          subtitle={projects[0].description} 
          btn_text={projects[0].btn_text} 
          btn_url={projects[0].btn_url} 
        />

      <div className={styles.grid}>
        {projects[0].items.map((item) => (
            <ProjectCard
              key={item.id}
              image={item.image?.url || ""}
              title={item.title}
              subtitle={item.sub_title}
              href={item.slug || "#"}
            />
          ))}
      </div>
      </div>
    </section>
  )
}

export default ProjectsSection
