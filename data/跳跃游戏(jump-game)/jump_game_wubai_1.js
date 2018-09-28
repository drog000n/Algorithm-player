// jump_game_wubai.js 使用的是贪心算法
// 这里使用动态规划
let print = nums => {
  // dp 代表达到 i 位置时剩下的步数
  // 当前位置剩余的步数与前一个位置剩余的步数和前一个位置的值有关
  // 状态转移方程组：
  // dp[i] = max(dp[i - 1], nums[i - 1]) - 1;
  // 当最后一个位置剩余的步数大于等于0时，说明到得了
  let n = nums.length;
  let dp = new Array(n).fill(0);
  let max = (a, b) => {
    if (a > b) {
      return a;
    }
    return b;
  }
  for (let i = 1; i < n; i++) {
    dp[i] = max(dp[i - 1], nums[i - 1]) - 1;
    if (dp[i] <= 0) {
      console.log(i);
      return false;
    // 剩余步数小于等于 0；
    }
  }
  return dp[n - 1] >= 0;
}

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  let nums = line.split(' ').map(x => parseInt(x));
  console.log(print(nums));
  rl.close();
})