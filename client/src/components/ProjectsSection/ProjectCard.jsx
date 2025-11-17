import Link from "next/link";
import styles from "./projects.module.css";
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const ProjectCard = ({ image, title, subtitle, href }) => {
  return (
    <Link href={href} className={styles.card_link}>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={`${STRAPI_URL}${image}`} alt={title} className={styles.img_cover} />
        </div>

        <div className={styles.card_info}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
