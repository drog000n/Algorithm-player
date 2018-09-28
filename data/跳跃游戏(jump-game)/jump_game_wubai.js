let print = nums => {
  let reach = 0;
  let n = nums.length;
  let max = (a, b) => {
    if (a > b) {
      return a;
    }
    return b;
  }
  for (let i = 0; i < n; i++) {
    if (i > reach || reach >= n - 1) {
      // i > reach 意味着，reach 到不了现在当前这个位置
      // reach >= n - 1 意味着，已经到达终点了
      break;
    }
    reach = max(reach, i + nums[i]);
  }
  console.log(reach >= n - 1);
  return reach >= n - 1;
}

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  let nums = line.split(' ').map(x => parseInt(x));
  print(nums);
  rl.close();
})