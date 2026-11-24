import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "Al";
const out = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error("entry word must be 1-30 non-whitespace characters");
}
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD, "utf8");
