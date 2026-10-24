// Self-hosts the dotLottie WebAssembly renderer instead of loading it from jsDelivr.
import { copyFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const source = resolve(dirname(require.resolve("@lottiefiles/dotlottie-web")), "dotlottie-player.wasm");

await mkdir(resolve(root, "public"), { recursive: true });
await copyFile(source, resolve(root, "public/dotlottie-player.wasm"));
