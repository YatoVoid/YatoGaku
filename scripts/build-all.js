#!/usr/bin/env node
// Builds the root Docusaurus site plus the two vendored apps, then copies
// each app's static output into build/apps/<name>/ so the whole thing
// deploys as one tree.
const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function run(command, cwd) {
  console.log(`\n$ (${path.relative(root, cwd) || '.'}) ${command}`);
  execSync(command, { cwd, stdio: 'inherit' });
}

function copyDir(src, dest) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

run('npm run build', root);
run('npm run build', path.join(root, 'apps/kana'));
run('npm run build', path.join(root, 'apps/quiz'));

copyDir(path.join(root, 'apps/kana/dist'), path.join(root, 'build/apps/kana'));
copyDir(path.join(root, 'apps/quiz/build'), path.join(root, 'build/apps/quiz'));

console.log('\nAssembled build/ with apps/kana and apps/quiz copied in.');
