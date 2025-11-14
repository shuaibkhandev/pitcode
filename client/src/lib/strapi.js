export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

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
