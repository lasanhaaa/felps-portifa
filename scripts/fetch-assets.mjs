// Downloads the binary assets (images, fonts, Lottie files) listed in
// scripts/assets.json from the original Framer CDN into the repo.
// Usage: npm run assets [-- --force]
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const force = process.argv.includes("--force");
const { assets } = JSON.parse(await readFile(resolve(root, "scripts/assets.json"), "utf8"));

const exists = (path) => stat(path).then(() => true, () => false);

let failed = 0;
for (const [target, url] of Object.entries(assets)) {
  const file = resolve(root, target);
  if (!force && (await exists(file))) {
    console.log(`skip  ${target}`);
    continue;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log(`fetch ${target}`);
  } catch (error) {
    failed++;
    console.error(`fail  ${target} (${url}): ${error.message}`);
  }
}

if (failed) process.exit(1);
