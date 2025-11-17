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
