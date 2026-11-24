// One Word, One Username, One Reward — make.fun entry.
// Writes our own make.fun username, one word, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "bright-lynx-98";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
