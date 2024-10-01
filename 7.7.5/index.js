function onlyUniqNumbers(iterable) {
  let j = [],
    k = 0;
  for (i = 0; i < iterable.length; i++) {
    iterable.sort((a, b) => a - b);
    iterable[i] === iterable[i + 1] ? k++ : j.push(iterable[i]);
  }
  return j;
}
const arrayA=[1,2,2,3,3,1];
const arrayB=[1,3,4,5,6,5,4,3,4,5,6,7,8,20,11,11,11,21,22,22];

console.log(onlyUniqNumbers(arrayA))
console.log(onlyUniqNumbers(arrayB))

  
