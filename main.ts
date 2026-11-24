// One Word, One Username, One Reward — make.fun entry.
// Writes our own make.fun username, one word, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "bright-lynx-98";

// Guard: the entry must be one word, 1–30 characters, not only whitespace.
if (
  USERNAME.length < 1 ||
  USERNAME.length > 30 ||
  USERNAME.trim().length === 0 ||
  /\s/.test(USERNAME)
) {
  throw new Error(`Invalid username entry: ${JSON.stringify(USERNAME)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
