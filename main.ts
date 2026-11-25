// One-Sentence Absurd Invention Pitch — one sentence, ridiculous invention (max 220 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "A kettle that sighs, files a formal complaint, and takes a union-mandated break after a single boil.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
