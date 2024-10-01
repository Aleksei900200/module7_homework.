const numbersOne = [2, 3, '+'];
const numbersTwo = [2, 3, '-'];
const numbersThree = [2, 3, '*'];
const numbersFour = [2, 3, '/'];

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;

    default:
      return a / b;
  }
}

console.log(calculate(2, 6, '+'));
console.log(calculate(2, 6, '*'));
console.log(calculate(2, 6, '-'));
console.log(calculate(2, 6, '/').toFixed(2));

console.log(calculate.apply(null, numbersOne));
console.log(calculate.apply(null, numbersTwo));
console.log(calculate.apply(null, numbersThree));
console.log(calculate.apply(null, numbersFour).toFixed(2));


 
