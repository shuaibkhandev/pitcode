import Image from "next/image";
import styles from "./Header.module.css"; // optional reuse

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.svg"
        alt="Pitcode logo"
        width={100}
        height={30}
        priority
      />
    </div>
  );
}
