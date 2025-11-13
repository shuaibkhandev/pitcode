import Link from "next/link";
import Logo from "./Logo";
import NavLink from "./NavLink";
import styles from "./Header.module.css";

export default function Header() {
  const links = [
    { label: "Ecommerce", href: "/ecommerce" },
    { label: "Cases", href: "/cases" },
    { label: "Integration", href: "/integration" },
    { label: "Mobile Apps", href: "/mobile-apps" },
    { label: "Brand Identity", href: "/brand-identity" },
    { label: "SaaS", href: "/saas" },
  ];

  return (
    <header className={styles.header}>
      <Logo />

      <nav className={styles.nav}>
        {links.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>

      <Link href="/contact" className={styles.workBtn}>
        Work with Us →
      </Link>
    </header>
  );
}
