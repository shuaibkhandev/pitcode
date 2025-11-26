import Image from "next/image";
import styles from "./Header.module.css"; // optional reuse
import Link from "next/link";

export default function Logo({src, alt, width, height}) {

  return (
    <div className={styles.logo}>
      <Link href={"/"}>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={30}
        priority
      />
      </Link>
    </div>
  );
}
