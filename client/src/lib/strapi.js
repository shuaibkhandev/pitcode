export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getHeaderData() {
  const res = await fetch(`${STRAPI_URL}/api/header?populate=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch header");
    return null;
  }

  const json = await res.json();
  const data = json?.data;

  if (!data) return null;

  const logoAttr = data.logo;
  const logoUrl = logoAttr
    ? logoAttr.url.startsWith("http")
      ? logoAttr.url
      : STRAPI_URL + logoAttr.url
    : null;

  return {
    logo: {
      url: logoUrl,
      alt: logoAttr?.alternativeText || "Logo",
      width: logoAttr?.width,
      height: logoAttr?.height,
    },
    menuItems: data.menu_items || [],
    cta: {
      text: data.cta_text,
      url: data.cta_url,
    },
  };
}




export async function getHeroByPage(page) {
  const res = await fetch(`${STRAPI_URL}/api/heroes?filters[page][$eq]=${page}&populate=*`);
  const json = await res.json();

  if (!json.data || json.data.length === 0) return null;

  const hero = json.data[0];

  

  return {
    title: hero.title,
    sub_title: hero.sub_title,
    breadcrumb: hero.breadcrumb,
    description: hero.description?.map(p => p.children.map(c => c.text).join("")).join("\n") || "",
    button: { text: hero.button_text, url: hero.button_url },
  };
}




export async function getProjectsSection() {
  const res = await fetch(`${STRAPI_URL}/api/projects-sections?populate[items][populate]=*`, {
    next: { revalidate: 30 },
  });

  const json = await res.json();
  const data = json?.data;

  if (!data || data.length === 0) return [];

  return data.map((project) => {
    // Map the items array
    const items = project.items?.map((item) => {
      const img = item.image;
      
      return {
        id: item.id,
        title: item.title,
        slug: item.slug,
        sub_title: item.sub_title,
        image: img
          ? {
              url: img.url,
              alt: img.alternativeText || item.title,
              width: img.width,
              height: img.height,
            }
          : null,
      };
    }) || [];

    return {
      id: project.id,
      documentId: project.documentId,
      page: project.page,
      title: project.title,
      description: project.sub_title,
      btn_text: project.btn_text,
      btn_url: project.btn_url,
      btn_target: project.btn_target,
      items,
    };
  });
}


export async function getClientsSection() {
  const res = await fetch(
    `${STRAPI_URL}/api/clients-sections?populate[items][populate]=*`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch Clients Section");
    return [];
  }

  const json = await res.json();
  const data = json?.data;

  if (!data || data.length === 0) return [];

  return data.map((section) => {
    // map each item from Strapi
    const items =
      section.items?.map((item) => {
        const img = item.image;

        const imgUrl = img?.url
          ? img.url.startsWith("http")
            ? img.url
            : STRAPI_URL + img.url
          : null;

        return {
          id: item.id,
          slug: item.slug,
          name: item.name,
          description: item.description,
          btn_text: item.btn_text,
          btn_url: item.btn_url,
          btn_target: item.btn_target,
          image: img
            ? {
                url: imgUrl,
                alt: img.alternativeText || item.name,
                width: img.width,
                height: img.height,
              }
            : null,
        };
      }) || [];

    return {
      id: section.id,
      documentId: section.documentId,
      title: section.title,
      sub_title: section.sub_title,
      items,
    };
  });
}


export async function getProcessSection() {
  const res = await fetch(
    `${STRAPI_URL}/api/process-sections?populate[steps]=*`,
    { next: { revalidate: 30 } }
  );

  const json = await res.json();
  const data = json?.data;

  if (!data || data.length === 0) return null;

  const section = data[0]; // Only one section expected

  // Map steps
  const steps =
    section.steps?.map((step) => ({
      id: step.id,
      number: step.number,
      title: step.title,
      description:
        step.description
          ?.map((block) =>
            block.children?.map((child) => child.text).join("") || ""
          )
          .join("\n") || "",
    })) || [];

  return {
    id: section.id,
    documentId: section.documentId,
    title: section.title,
    sub_title: section.sub_title,
    steps,
  };
}



export async function getServicesSection() {
  const res = await fetch(
    `${STRAPI_URL}/api/services-sections?populate[services][populate]=*`,
    {
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch Services Section");
    return [];
  }

  const json = await res.json();
  const data = json?.data;

  if (!data || data.length === 0) return [];

  return data.map((section) => {
    const services =
      section.services?.map((svc) => {
        const badgeIcon = svc.badge_icon;
        const image = svc.image;

        const badgeUrl = badgeIcon?.url
          ? badgeIcon.url.startsWith("http")
            ? badgeIcon.url
            : STRAPI_URL + badgeIcon.url
          : null;

        const imgUrl = image?.url
          ? image.url.startsWith("http")
            ? image.url
            : STRAPI_URL + image.url
          : null;

        return {
          id: svc.id,
          badge_label: svc.badge_label,
          title: svc.title,
          description: svc.description,
          btn_text: svc.btn_text,
          btn_url: svc.btn_url,

          badge_icon: badgeIcon
            ? {
                url: badgeUrl,
                alt: badgeIcon.alternativeText || svc.badge_label,
                width: badgeIcon.width,
                height: badgeIcon.height,
              }
            : null,

          image: image
            ? {
                url: imgUrl,
                alt: image.alternativeText || svc.title,
                width: image.width,
                height: image.height,
              }
            : null,

          service_type:
            svc.service_type?.map((t) => ({
              id: t.id,
              label: t.label,
            })) || [],
        };
      }) || [];

    return {
      id: section.id,
      documentId: section.documentId,
      title: section.title,
      services,
    };
  });
}


export async function getProjectsFlowSection() {
  const res = await fetch(
    `${STRAPI_URL}/api/projects-flow-sections?populate[projects_flow_items][populate]=*`,
    {
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch Projects Flow Section");
    return [];
  }

  const json = await res.json();
  const data = json?.data;

  if (!data || data.length === 0) return [];

  return data.map((section) => {
    const items =
      section.projects_flow_items?.map((item) => {
        const image = item.image;

        const imgUrl = image?.url
          ? image.url.startsWith("http")
            ? image.url
            : STRAPI_URL + image.url
          : null;

        return {
          id: item.id,
          number: item.number || null,
          title: item.title || null,
          description: item.description || null,
          btn_text: item.btn_text || null,
          btn_url: item.btn_url || null,
          type: item.type || (image ? "image" : null),
          image: image
            ? {
                url: imgUrl,
                alt: image.alternativeText || item.title || "project image",
                width: image.width,
                height: image.height,
              }
            : null,
        };
      }) || [];

    return {
      id: section.id,
      documentId: section.documentId,
      title: section.title || null,
      description: section.description || null,
      items,
    };
  });
}


export async function getPartnersSection() {
  const res = await fetch(`${STRAPI_URL}/api/partners-section?populate=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Failed to fetch Partners Section");
    return null;
  }

  const json = await res.json();
  const data = json?.data;

  if (!data) return null;

  const image = data.image;
  const imgUrl = image?.url?.startsWith("http")
    ? image.url
    : STRAPI_URL + image.url;

  return {
    title: data.title,
    subtitle: data.sub_title,
    button_text: data.btn_text,
    button_url: data.btn_url,
    image: {
      url: imgUrl,
      alt: image?.alternativeText || data.title,
      width: image?.width,
      height: image?.height,
    },
  };
}

export async function getTestimonialsSection() {
  const res = await fetch(
    `${STRAPI_URL}/api/testimonials-sections?populate=*`,
    { next: { revalidate: 30 } }
  );

  const json = await res.json();
  return json.data;
}

