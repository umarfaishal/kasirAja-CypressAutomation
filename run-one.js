const { execSync } = require('child_process');


const args = process.argv.slice(2);
const spec = args[0]; 

// command cypress
let command = `npx cypress run `;

if (spec) {
  command += ` --spec "${spec}"`;
}

try {
  console.log(`Running: ${command}`);
  execSync(command, { stdio: 'inherit' });
  console.log('Test selesai dan semua case berhasil dijalankan');
} catch (error) {
  console.error('Terdapat kesalahan pada case:', error.message);
}
