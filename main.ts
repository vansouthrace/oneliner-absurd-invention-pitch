import { mkdirSync, writeFileSync } from "node:fs";

const entry = "A toaster that apologizes in advance, prints a tiny sorry note on your toast, and then burns it anyway out of spite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
