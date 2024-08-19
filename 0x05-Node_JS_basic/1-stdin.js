const stdin = process.openStdin();

stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');
stdin.on('data', (chunk) => {
  process.stdout.write(`Your name is: ${chunk}`);
  stdin.pause();
});

stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
