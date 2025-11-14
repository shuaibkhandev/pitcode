"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export default function NavLink({ url, label }) {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={`${styles.link} ${isActive ? styles.active : ""}`}
    >
      {label}
    </Link>
  );
}
