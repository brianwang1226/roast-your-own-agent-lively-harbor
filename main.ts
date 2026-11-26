import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast: the agent answers in 2 seconds, then explains for 4 hours.
const LINE =
  "My agent answered in 2 seconds, then spent 4 hours explaining the answer. The explanation now has its own roadmap — and a waitlist.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
