let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  let token = line.split(' ').map(value => parseInt(value));
  let max_here = token[0];
  let max_sum = token[0];
  for (let i=1; i<token.length; i++) {
    if (max_here <= 0) {
      max_here = token[i];
    } else {
      max_here += token[i];
    }
    if (max_here > max_sum) {
      max_sum = max_here;
    }
  }
  console.log(max_sum);
  rl.close();
});