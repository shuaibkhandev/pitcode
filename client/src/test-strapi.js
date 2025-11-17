import { getClientsSection } from "./lib/strapi.js";

async function test() {
  try {
    const header = await getClientsSection();
    console.log(header);
  } catch (err) {
    console.error(err);
  }
}

test();
