const Sith = [
  { name: 'Кайло Рен', age: 10 },
  { name: 'Дарт Вейдер', age: 31 },
  { name: 'Лорд Гривус', age: 21 },
];

const seniorSith = Sith.filter((item) => item.age >= 18);

console.log(seniorSith);

const onlyNamesOfSeniorSith = seniorSith.reduce((acc, el) => {
  acc.push(el.name);
  return acc;
}, []);

console.log(onlyNamesOfSeniorSith);
