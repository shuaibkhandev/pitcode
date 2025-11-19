import {  getProjectsFlowSection } from "./lib/strapi.js";

async function test() {
  try {
    const header = await getProjectsFlowSection();
    console.log(header);
  } catch (err) {
    console.error(err);
  }
}

test();
