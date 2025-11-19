import Link from "next/link";
import styles from "./projects.module.css";


const SectionHeading = ({ title, subtitle, btn_text, btn_url }) => {
  return (
    <div className={`${styles.head} section_top two_col `}>
      <div className={styles.left}>
        <h2 className={"title"}>{title}</h2>
        <p className={"sub_title"}>{subtitle}</p>
      </div>

      <div className={styles.right}>
        <Link href={btn_url || "/work"} className="cta_primary">
          {btn_text || "View All Work"}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SectionHeading;
