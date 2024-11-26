process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (INPUT) => {
  console.log(`Your name is: ${INPUT.toString().trim()}`);
  console.log('This important software is now closing');
  process.exit(0);
});
