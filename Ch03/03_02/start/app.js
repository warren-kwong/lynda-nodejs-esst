// process is available in any module globally
console.log(process.argv);

function grab(flag) {
  let index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index + 1];
}

let greeting = grab('--greeting');
let user = grab('--user');

if (!user || !greeting) {
  console.log('No user or greeting');
} else {
  console.log(`Welcome ${user}, ${greeting}`);
}
