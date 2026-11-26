import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — one line, 128 characters.
const LINE =
  "My agent spent 40,000 tokens deciding how to rename one file, then named it 'final_final_v2_REAL.ts' and asked if that was okay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
