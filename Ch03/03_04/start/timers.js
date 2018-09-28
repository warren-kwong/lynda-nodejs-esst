var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log('Wait for it');

setInterval(() => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds...`);
}, waitInterval);

setTimeout(() => {
  console.log('done');
}, waitTime);
