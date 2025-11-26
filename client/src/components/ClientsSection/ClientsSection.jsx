import styles from "./ClientsSection.module.css";
import { getClientsSection } from "@/lib/strapi";



const ClientsSection = async () => {
   const sections = await getClientsSection();
    const clients = sections[0]?.items || [];
  return (
 <section className={`${styles.clients_section}`}>
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
              <div className={styles["card_overlay"]}>
                <h3>{client.name}</h3>

                {client.description && <p className={`text`}>{client.description}</p>}

                {client.cta_url && (
                  <a
                    href={client.cta_url}
                    target={client.cta_target || "_self"}
                    className={`cta_secondary`}
                  >
                    {client.cta_text || "Learn More"}  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
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
