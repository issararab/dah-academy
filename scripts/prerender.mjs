import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const distIndexPath = resolve(root, "dist/index.html");
const ssrEntryPath = resolve(root, "dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(ssrEntryPath).href);
const appHtml = render();

if (!appHtml || appHtml.length < 100) {
  throw new Error(
    `Prerender produced suspiciously little output (${appHtml?.length ?? 0} chars) — aborting instead of shipping a broken build.`
  );
}

const original = readFileSync(distIndexPath, "utf-8");
const marker = '<div id="root"></div>';

if (!original.includes(marker)) {
  throw new Error(
    `Could not find '${marker}' in dist/index.html — aborting instead of shipping a broken build.`
  );
}

const html = original.replace(marker, `<div id="root">${appHtml}</div>`);

if (html === original) {
  throw new Error("Prerender replace was a no-op — aborting instead of shipping a broken build.");
}

writeFileSync(distIndexPath, html);

const ssrOutDir = resolve(root, "dist-ssr");
if (existsSync(ssrOutDir)) {
  rmSync(ssrOutDir, { recursive: true, force: true });
}

console.log("Prerendered app HTML injected into dist/index.html");
