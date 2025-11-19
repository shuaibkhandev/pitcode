import styles from "./projectflow.module.css";

export default function ProjectFlowCard({ data }) {

  
  if (data.type === "image") {
    return (
      <div className={`${styles.card} ${styles.imageCard}`}>
        <img src={data.image.url} className={styles.image} alt="process step" />
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <span className={styles.number}>{data.number}</span>

<div className={styles.bottom}>
      <h3 className={styles.card_title}>{data.title}</h3>
      <p className={`${styles.description} secondary_text`}>{data.description}</p>

      <button className={`cta_primary ${styles.cta}`}>
        {data.btn_text} <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
      </button>
      </div>
    </div>
  );
}
