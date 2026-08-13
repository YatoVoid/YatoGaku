/**
 * Check if test coverage meets minimum thresholds
 * Exits with code 1 if any threshold is not met
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const COVERAGE_FILE = join(__dirname, '../coverage/coverage-summary.json');

const THRESHOLDS = {
  lines: 80,
  statements: 80,
  functions: 75,
  branches: 60
};

try {
  const coverageData = JSON.parse(readFileSync(COVERAGE_FILE, 'utf8'));
  const total = coverageData.total;

  const results = {
    lines: total.lines.pct,
    statements: total.statements.pct,
    functions: total.functions.pct,
    branches: total.branches.pct
  };

  console.log('\n📊 Coverage Report Summary:');
  console.log('============================');

  let failed = false;

  Object.entries(results).forEach(([metric, value]) => {
    const threshold = THRESHOLDS[metric];
    const passed = value >= threshold;
    const icon = passed ? '✅' : '❌';
    const status = passed ? 'PASS' : 'FAIL';

    console.log(`${icon} ${metric.padEnd(12)}: ${value.toFixed(2)}% (threshold: ${threshold}%) [${status}]`);

    if (!passed) {
      failed = true;
    }
  });

  console.log('============================');

  if (failed) {
    console.error('\n❌ Coverage thresholds not met!');
    console.error('Please add more tests to increase coverage.\n');
    process.exit(1);
  } else {
    console.log('\n✅ All coverage thresholds met!');
    console.log('Great job! Keep up the good work.\n');
    process.exit(0);
  }
} catch (error) {
  console.error('\n❌ Error reading coverage file:');
  console.error(error.message);
  console.error('\nMake sure to run tests with coverage first: npm run test:coverage\n');
  process.exit(1);
}
