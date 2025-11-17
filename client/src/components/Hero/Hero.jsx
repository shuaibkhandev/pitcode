import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero({ data }) {
     if (!data) return null;

  const { title, sub_title, description, button } = data;
    
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
          <h2 className={styles.sub_title}>{sub_title}</h2>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>
            {description}
          </p>
          <Link href={button.url} className={"cta_secondary"}>
            {button.text}  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
          </Link>
        </div>
     
    </section>
  );
}
