var stdin = process.openStdin();

stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');
stdin.on('data', function (chunk) {
  process.stdout.write('Your name is: ' + chunk);
  stdin.pause();
});

stdin.on('end', function () {
  process.stdout.write('This important software is now closing\n');
});