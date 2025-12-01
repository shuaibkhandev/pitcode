import fetchContentType from "./lib/fetchContentType.js";
async function test() {
  try {
    const header =  await fetchContentType("aboutpage")
    console.log(header);
  } catch (err) {
    console.error(err);
  }
}


test();
