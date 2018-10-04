// child_process module
const exec = require('child_process').exec;

// everytime you execute a process -- any data returned by process gets returned to the callback function
exec('git version', function(err, stdout) {
  if (err) throw err;
  console.log('Git Version Executed');
  console.log(stdout);
});
