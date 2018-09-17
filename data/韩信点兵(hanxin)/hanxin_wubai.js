// node v8.11.3

/* 
定理1——
如 a ≡ b mod n，c ≡ d mod n
则 a * c ≡ b * d mod n
定理二——
如 a ≡ r mod b，则 a ± b * n ≡ r mod b
例如 70 ≡ 1 mod 3，可得 70 ± 10 * 3 ≡ 1 mod 3

故本题变为：
（70a + 21b + 15c）%（3 * 5 * 7），其中 a，b，c 为输入的值
*/

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  let token = line.split(' ').map(value => parseInt(value));
  let result = (token[0] * 70 + token[1] * 21 + token[2] * 15) % (3 * 5 * 7);
  if (result >= 10 && result <= 100) {
    console.log(result);
  } else {
    console.log('null');
  }
  rl.close();
});