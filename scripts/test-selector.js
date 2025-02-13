const fs = require('fs');
const { execSync } = require('child_process');

// Read selected tasks
const tasks = JSON.parse(fs.readFileSync('tasks.json')).tasks;

// Check if running E2E tests
const isE2E = process.argv.includes('--e2e');

if (isE2E) {
  // Run E2E tests for selected tasks
  tasks.forEach(task => {
    console.log(`Running E2E tests for ${task}...`);
    execSync(`npx detox test -c ios.sim.release --grep ${task}`, { stdio: 'inherit' });
  });
} else {
  // Run unit tests for selected tasks
  tasks.forEach(task => {
    console.log(`Running unit tests for ${task}...`);
    execSync(`npx jest tests/unit/${task}.test.js --coverage`, { stdio: 'inherit' });
  });
}