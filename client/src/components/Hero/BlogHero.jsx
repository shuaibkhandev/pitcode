import Link from "next/link";
import styles from "./Hero.module.css";

export default function BlogHero({ data, variant = "default", blog_name }) {
     if (!data) return null;
    
  return (
    <section className={`${styles.section} ${styles.hero_section} ${styles[variant]}`}>
        <div className={styles.content}>
          <div className={styles.breadcrumb}>
          
{blog_name ? <>  <Link href={"/"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M1.42871 10L10.0001 1.42857L18.5716 10" stroke="#EBEBEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 8.09525V14.7619C3.33301 15.2671 3.53369 15.7516 3.8909 16.1088C4.24811 16.466 4.7326 16.6667 5.23777 16.6667H14.7616C15.2668 16.6667 15.7512 16.466 16.1084 16.1088C16.4657 15.7516 16.6663 15.2671 16.6663 14.7619V8.09525" stroke="#EBEBEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></Link> <span className={styles.dot}>.</span> <Link href={"/blogs"}>Blog</Link> <span className={styles.dot}>.</span>  <span className={styles.breadcrumb_text}>{blog_name}</span></> : <>  <Link href={"/"}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M1.42871 10L10.0001 1.42857L18.5716 10" stroke="#EBEBEB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 8.09525V14.7619C3.33301 15.2671 3.53369 15.7516 3.8909 16.1088C4.24811 16.466 4.7326 16.6667 5.23777 16.6667H14.7616C15.2668 16.6667 15.7512 16.466 16.1084 16.1088C16.4657 15.7516 16.6663 15.2671 16.6663 14.7619V8.09525" stroke="#EBEBEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></Link> <span className={styles.dot}>.</span> <span className={styles.breadcrumb_text}>Blog</span></>}
          </div>
          <h2 className={styles.sub_title}>{data?.sub_title}</h2>
          <h1 className={styles.title}>{data?.title}</h1>
          <p className={styles.text}>
            {data.description}
          </p>
          {data.cta?.text &&          <Link href={data?.cta?.url} className={"cta_secondary"}>
            {data?.cta?.text}  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
          </Link>}
 
        </div>
     
    </section>
  );
}
