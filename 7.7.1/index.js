const person = {
	Name: "Aleksei",
	Age: 52
};

function PrintInfo() {
	console.log(`Hello, ${this.Name} ${this.Age}!`);
}

PrintInfo.call(person)