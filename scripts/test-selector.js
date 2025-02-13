const fs = require('fs');
const { execSync } = require('child_process');

// Read selected tasks
const tasks = JSON.parse(fs.readFileSync('tasks.json')).tasks;

// Run unit tests for selected tasks
tasks.forEach(task => {
  execSync(`npx jest tests/unit/${task}.test.js --coverage`, { stdio: 'inherit' });
});

// Run E2E tests for selected tasks
execSync('npm run build:e2e', { stdio: 'inherit' });
tasks.forEach(task => {
  execSync(`npx detox test -c ios.sim.release --grep ${task}`, { stdio: 'inherit' });
});