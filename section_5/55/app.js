function Person(firstname, lastname) {

	console.log(this) 
	this.firstname = firstname;
	this.lastname = lastname; 
	console.log('This function is being invoked.')
}

Person.prototype.getFullName = function() {
	return this.firstname + ' ' + this.lastname;
}

var john = Person('John', 'Doe');
console.log(john);

var jane = Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
	return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName)