// The Most Boring Object, Reviewed in One Line — "The toilet brush"
// Writes the review line to /output/entry.txt.
// The line is 95 characters: one boring object, one true detail, twist in the last words.
// Why it works: the brush holder always sits in a puddle of dirty water —
// the joke is the object's own dullness, and the last words sharpen it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "The toilet brush does the worst job in the house, then goes home to a puddle of its own making.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
