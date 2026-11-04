import { readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';

const templateUrl = new URL('../assets/review-deck.html', import.meta.url);
const marker = '__REVIEW_DATA__';

async function readEvidence(directory, file, name) {
  if (typeof file !== 'string' || !file) throw new Error(name + ' needs an evidence file.');
  const path = resolve(directory, file);
  switch (extname(path).toLowerCase()) {
    case '.html':
      return readFile(path, 'utf8');
    case '.png': {
      const png = await readFile(path);
      return '<!doctype html><meta charset="utf-8"><style>body{margin:0}img{display:block;width:100%}</style>' +
        '<img alt="Interface capture" src="data:image/png;base64,' + png.toString('base64') + '">';
    }
    default:
      throw new Error(name + ' must be a .png capture or a self-contained .html scene.');
  }
}

async function build(manifestPath, outputPath) {
  if (!manifestPath || !outputPath) {
    throw new Error('Usage: node build-deck.mjs review.json review.html');
  }
  const output = resolve(outputPath);
  if (extname(output).toLowerCase() !== '.html') throw new Error('Choose an .html output file.');
  const { title = 'UI Iteration', cases } = JSON.parse(await readFile(manifestPath, 'utf8'));
  if (!Array.isArray(cases) || !cases.length) throw new Error('Add at least one review case.');
  const directory = dirname(resolve(manifestPath));
  const keys = new Set();
  const entries = [];

  for (const entry of cases) {
    const { id, group, title, caption, viewport = [1100, 740], afterLabel = 'Proposal' } = entry;
    if (typeof id !== 'string' || !/^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/.test(id) || keys.has(id)) {
      throw new Error('Use a unique case ID made of lowercase letters, numbers, hyphens, and slashes: ' + id);
    }
    keys.add(id);
    for (const [field, value] of Object.entries({ group, title, caption, afterLabel })) {
      if (typeof value !== 'string' || !value.trim()) throw new Error(id + ' needs a ' + field + '.');
    }
    if (!Array.isArray(viewport) || viewport.length !== 2 ||
        !viewport.every(value => Number.isSafeInteger(value) && value > 0)) {
      throw new Error(id + ' needs a viewport of two positive integers.');
    }
    if ([entry.before, entry.after].some(file => typeof file === 'string' && resolve(directory, file) === output)) {
      throw new Error('The output cannot overwrite an evidence file.');
    }
    const before = await readEvidence(directory, entry.before, id + ' before');
    const after = entry.after === undefined ? null : await readEvidence(directory, entry.after, id + ' after');
    if (before === after) throw new Error(id + ' has identical evidence. Keep one view only when it adds context.');
    entries.push({ id, group, title, caption, viewport, afterLabel, before, after });
  }

  const template = await readFile(templateUrl, 'utf8');
  const data = JSON.stringify({ title, cases: entries }).replaceAll('<', '\\u003c');
  await writeFile(output, template.replace(marker, () => data));
  console.log('Built ' + entries.length + ' review cases in ' + outputPath);
}

build(...process.argv.slice(2)).catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
