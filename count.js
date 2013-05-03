var sleep = require('sleep');

var count = 0;
// print a counter to stdout once per second.
while (1) {
  console.log(count);
  count++;
  sleep.sleep(1);
}
