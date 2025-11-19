import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./NavLink";
import styles from "./Header.module.css";
import { getHeaderData } from "@/lib/strapi";

export default async function Header() {
    const header = await getHeaderData();
  if (!header) return null;

  const { logo, menuItems, cta } = header;

  return (
    <header className={styles.header}>
      <Logo src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} />

      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <NavLink key={item.id} {...item} />
        ))}
      </nav>

      <Link href={cta.url} className={styles.work_btn}>
        {cta.text} <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      </Link>
    </header>
  );
}
