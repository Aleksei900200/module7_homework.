let numbers = [2, 3, '+'];
let numbers1 = [2, 3, '-'];
let numbers2 = [2, 3, '*'];
let numbers3 = [2, 3, '/'];

function calculate(a, b, operator) {
  let result;
  operator === '+'
    ? (result = a + b)
    : operator === '-'
    ? (result = a - b)
    : operator === '*'
    ? (result = a * b)
    : (result = a / b);
  return result;
}

console.log(calculate(2, 6, '+'));
console.log(calculate(2, 6, '*'));
console.log(calculate(2, 6, '-'));
console.log(calculate(2, 6, '/').toFixed(2));

console.log(calculate.apply(null, numbers));
console.log(calculate.apply(null, numbers1));
console.log(calculate.apply(null, numbers2));
console.log(calculate.apply(null, numbers3).toFixed(2));
