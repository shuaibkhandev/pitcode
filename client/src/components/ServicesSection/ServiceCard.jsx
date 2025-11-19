import styles from "./services.module.css";

export default function ServiceCard({ index, data }) {
  const { badge, title, description, image, types } = data;

  return (
    <div
      className={styles.card}
      style={{ top: `${200 + index * 40}px` }}
      data-index={index}
    >
      <div className={styles.left}>
        <div className={styles.content}>
          <span className={styles.badge}>
            {badge?.icon && <img src={badge.icon} alt={badge.label} />}
            {badge?.label}
          </span>

          <h3 className={styles.card_title}>{title}</h3>
          <p className={`${styles.text} secondary_text`}>{description}</p>

          <button className={"cta_secondary"}>
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 30 30"
              fill="currentColor"
            >
              <path
                d="M10.5693 19.0816L19.4317 10.2193M19.4317 10.2193L12.5633 9.9977M19.4317 10.2193L19.6532 17.0876"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.types}>
            {types?.map((type, i) => (
              <span key={i} className={styles.type}>
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        {image && <img src={image} alt={title} />}
      </div>
    </div>
  );
}
