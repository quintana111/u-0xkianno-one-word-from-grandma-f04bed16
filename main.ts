import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Grandma reads "AI" as a person named Al — the whole joke in one word.
const WORD = "Al";
const scriptDir = dirname(fileURLToPath(import.meta.url));
const rawOut = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
// A relative override resolves against the script dir, never the cwd.
const out = rawOut.startsWith("/") ? rawOut : join(scriptDir, rawOut);
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error("entry word must be 1-30 non-whitespace characters");
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD, "utf8");
