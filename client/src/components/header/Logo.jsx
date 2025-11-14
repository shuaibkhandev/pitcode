import Image from "next/image";
import styles from "./Header.module.css"; // optional reuse

export default function Logo({src, alt, width, height}) {

  return (
    <div className={styles.logo}>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={30}
        priority
      />
    </div>
  );
}
