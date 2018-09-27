// process features:
// standard input (process.stdin) and standard output (process.stdout)

const questions = [
  'What is your name?',
  'What is your favorite hobby?',
  'What is your preferred programming language?'
];

let answers = [];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write('  >  ');
}

// listening for data asynchronously
process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    // ends the process from within the program
    process.exit();
  }
});

// listen for 'exit' event on the process object
process.on('exit', () => {
  process.stdout.write('\n\n\n\n');
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later`
  );
  process.stdout.write('\n\n\n\n');
});

ask(0);
