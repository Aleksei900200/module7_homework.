const person = {
  firstName: 'John',
  lastName: 'Doe',
};

function setFullName(obj) {
  return (obj.fullName = undefined);
}

setFullName(person);
console.log(person);

function setPersonFullName(obj,name){
	return obj.fullName=name;
}

setPersonFullName(person,'John Smith');
console.log(person)

//Тех задание не ясно - сделал так как понял!