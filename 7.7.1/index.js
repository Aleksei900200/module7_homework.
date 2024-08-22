const person = {
	Name: "Aleksei",
	Age: 52
};

function printInfo() {
	console.log(`Hello, ${this.Name} ${this.Age}!`);
}

printInfo.call(person)