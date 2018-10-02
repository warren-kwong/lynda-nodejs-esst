// module that allows us to ask questions to our terminal user and save the answers
const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let realPerson = {
  name: '',
  sayings: []
};

rl.question('What is the name of a real person? ', ans => {
  realPerson.name = ans;

  // set prompt
  rl.setPrompt(`What would ${realPerson.name} say? `);
  // display prompt
  rl.prompt();
  // event that will fire when a user submits a response
  rl.on('line', saying => {
    if (saying.toLowerCase().trim() === 'exit') {
      // closes the readline instance
      rl.close();
    } else {
      realPerson.sayings.push(saying.trim());
      rl.setPrompt(
        `What else would ${realPerson.name} say? ('exit' to leave) `
      );
      rl.prompt();
    }
  });
});

// set up a listener for the close event on the instance
rl.on('close', () => {
  // %s in console.log is a placeholder for a string -- will replace the second argument with a string
  // %j in console.log is a placeholder for a json string
  console.log(
    '%s is a real person that says %j',
    realPerson.name,
    realPerson.sayings
  );
  process.exit();
});
