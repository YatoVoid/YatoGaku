/**
 * Automated script to convert lesson-XX.js files to TypeScript
 * Preserves 100% of content, only changes format
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = join(__dirname, '../../src/js/data/minna');
const targetDir = join(__dirname, '../src/lib/data/minna/lessons');

// Ensure target directory exists
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

function convertLessonFile(lessonNumber) {
  const paddedNum = String(lessonNumber).padStart(2, '0');
  const sourceFile = join(sourceDir, `lesson-${paddedNum}.js`);
  const targetFile = join(targetDir, `lesson-${paddedNum}.ts`);

  try {
    console.log(`Converting lesson-${paddedNum}.js...`);

    // Read source file
    let content = readFileSync(sourceFile, 'utf-8');

    // Extract the comment at the top
    const commentMatch = content.match(/^\/\/ .+$/m);
    const comment = commentMatch ? commentMatch[0] : `// Lesson ${lessonNumber}`;

    // Extract the data object (everything between { and };)
    const dataMatch = content.match(/const LESSON_\d+_DATA\s*=\s*(\{[\s\S]+\});/);

    if (!dataMatch) {
      console.error(`  ✗ Could not extract data from lesson-${paddedNum}.js`);
      return false;
    }

    const dataObject = dataMatch[1];

    // Build TypeScript file
    const tsContent = `${comment}
import type { LessonData } from '$lib/types';

export const LESSON_${paddedNum}_DATA: LessonData = ${dataObject};
`;

    // Write to target file
    writeFileSync(targetFile, tsContent, 'utf-8');
    console.log(`  ✓ Created lesson-${paddedNum}.ts`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error converting lesson-${paddedNum}: ${error.message}`);
    return false;
  }
}

// Convert all lessons (1-25 for JLPT)
console.log('Starting lesson data migration...\n');
let successCount = 0;
let failCount = 0;

for (let i = 1; i <= 25; i++) {
  if (convertLessonFile(i)) {
    successCount++;
  } else {
    failCount++;
  }
}

console.log(`\n${'='.repeat(50)}`);
console.log(`Migration complete:`);
console.log(`  ✓ Success: ${successCount}/25`);
console.log(`  ✗ Failed: ${failCount}/25`);
console.log(`${'='.repeat(50)}`);

process.exit(failCount > 0 ? 1 : 0);
