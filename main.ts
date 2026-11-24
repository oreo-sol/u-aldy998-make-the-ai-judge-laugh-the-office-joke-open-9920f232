import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I apologized for the reply-all with a reply-all, and now the apology needs an apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
