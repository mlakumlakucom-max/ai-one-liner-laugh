import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "In my defence, the sock identified as dust, and I don't ask questions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
