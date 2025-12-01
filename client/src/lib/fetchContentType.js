export default async function fetchContentType(contentType) {
  try {
    console.log("Fetching content type:", contentType);

    // 1. Base URL for Strapi
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

    // 2. Build URL with a specific filter query
    // This fetches only the page where slug = 'aboutpage' and populates all relations
    const url = `${baseUrl}/api/pages?filters[slug][$eq]=${contentType}&populate=*`;

    // 3. Call the Strapi API
    const response = await fetch(url);

    // 4. If API call failed
    if (!response.ok) {
      console.error("Failed to fetch:", url, "Status:", response.status);
      return null;
    }

    // 5. Convert response into JSON
    const result = await response.json();

    // 6. Return only the data part
    return result.data;

  } catch (err) {
    console.error("fetchContentType Error:", err);
    return null;
  }
}
