let print = matrix => {
  if (matrix.length === 0) {
    console.log([]);
    return;
  }
  if (matrix[0].length === 0) {
    console.log([[]]);
    return;
  }
  let direction = 0;
  let new_matrix = [];
  let n_length = matrix[0].length;
  let m_length = matrix.length;
  let m = 0;
  let n = 0;
  let s = new Set();
  new_matrix.push(matrix[0][0]);
  s.add(0);
  let available = (m, n) => {
    if (s.has(m * n_length + n) || m >= m_length || n >= n_length) {
      return false;
    }
    return true;
  }
  while (true) {
    switch (direction % 4) {
      case 0:
        if (available(m, n+1)) {
          new_matrix.push(matrix[m][++n]);
          s.add(m * n_length + n);
        } else {
          direction++;
        }
        break;
      case 1:
        if (available(m+1, n)) {
          new_matrix.push(matrix[++m][n]);
          s.add(m * n_length + n);
        } else {
          direction++;
        }
        break;
      case 2:
        if (available(m, n-1)) {
          new_matrix.push(matrix[m][--n]);
          s.add(m * n_length + n);
        } else {
          direction++;
        }
        break;
      case 3:
        if (available(m-1, n)) {
          new_matrix.push(matrix[--m][n]);
          s.add(m * n_length + n);
        } else {
          direction++;
        }
        break;
    }
    if (s.size === m_length * n_length) {
      break;
    }
  }
  console.log(new_matrix);
}

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let m = 0;
let d = 0;
let n = 0;
let matrix = [];
rl.on('line', line => {
  if (count === 0) {
    m = parseInt(line);
    d = m;
  } else if (count === 1) {
    n = parseInt(line);
  } else {
    if (n === 0) {
      matrix.push([]);
    } else {
      let tokens = line.split(' ').map(x => parseInt(x));
      matrix.push(tokens);
    }
    d--;
  }
  if (d === 0) {
    print(matrix);
    rl.close();
  }
  count < 2 && count++;
})