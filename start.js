const { exec } = require('child_process');

exec('npx npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command error: ${stderr}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});

exec('npx npm run start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Command error: ${stderr}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});