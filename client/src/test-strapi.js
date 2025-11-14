import { getHeaderData } from "./lib/strapi.js";

async function test() {
  try {
    const header = await getHeaderData();
    console.log(header);
  } catch (err) {
    console.error(err);
  }
}

test();
