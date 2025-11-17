import styles from "./ClientsSection.module.css";
import { getClientsSection } from "@/lib/strapi";

const clients = [
  {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
  {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
    {
    name: "Aiportr",
    description:
      "Recognized as one of the top 5 most innovative UK transport tech firms by TransportTech 2023.",
    link: "#",
    logo: null,
  },
];

const ClientsSection = async () => {
   const sections = await getClientsSection();
    const clients = sections[0]?.items || [];
  return (
 <section className={styles.section}>
      <div className="main_container">
        <div className={styles.grid}>
          {clients.map((client) => (
            <div key={client.id} className={styles.card}>
              
              {/* Logo */}
              {client.image?.url && (
                <img
                  src={client.image.url}
                  alt={client.image.alt || client.name}
                  className={styles.logo}
                />
              )}

              {/* Overlay */}
              <div className={styles["card-overlay"]}>
                <h3>{client.name}</h3>

                {client.description && <p>{client.description}</p>}

                {client.btn_url && (
                  <a
                    href={client.btn_url}
                    target={client.btn_target || "_self"}
                    className={styles.cta}
                  >
                    {client.btn_text || "Learn More"} →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
