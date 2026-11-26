// A renamed planet, written to /output/entry.txt.
// Node 22, standard library only; MAKEFUN_OUTPUT_DIR stands in for /output
// outside the grader. The output is byte-identical on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "Mars is now 'Refund Planet' — we spent billions looking for water there and all we found was a rock that charges rent in dust storms.";

// The competition gate for this entry: under 200 characters.
const LIMIT = 200;

function checkEntry(line: string, limit: number): void {
  if (line.length >= limit) {
    console.error(`entry is ${line.length} characters, over the under-${limit} limit`);
    process.exit(1);
  }
}

checkEntry(LINE, LIMIT);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// No trailing newline: the file is exactly the rename, nothing more.
