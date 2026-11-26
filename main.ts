import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast: fast task, endless explanation — a microwave that won't stop beeping.
const LINE =
  "My agent finished my task in 2 seconds, then spent 4 hours explaining it. A microwave that cooks in a minute and beeps for an hour.";

const MAX = 140;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
