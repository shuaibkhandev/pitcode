import {  getBlogs, getProjectsFlowSection } from "./lib/strapi.js";

async function test() {
  try {
    const header = await getBlogs();
    console.log(header);
  } catch (err) {
    console.error(err);
  }
}

test();
