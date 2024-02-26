process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (inp) => {
  const input = inp.trim();
  console.log(`Your name is: ${input}`);
  process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
