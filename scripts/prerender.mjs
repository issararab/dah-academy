import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distIndexPath = resolve(root, "dist/index.html");
const ssrEntryPath = resolve(root, "dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(ssrEntryPath).href);
const appHtml = render();

const html = readFileSync(distIndexPath, "utf-8").replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

writeFileSync(distIndexPath, html);

const ssrOutDir = resolve(root, "dist-ssr");
if (existsSync(ssrOutDir)) {
  rmSync(ssrOutDir, { recursive: true, force: true });
}

console.log("Prerendered app HTML injected into dist/index.html");
