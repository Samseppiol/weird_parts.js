var person = {
	firstname: 'default',
	lastname: 'default',
	getFullName: function() {
		return this.firstname = ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

john.__proto__ = person;


// This grabs every property on the object and the objects prototype.
// However with the if statement we put over it, we only want to log properties of john.
for (var prop in john) {
	if (john.hasOwnProperty(prop)) {
		console.log(prop + ': ' + john[prop])
	}
}

var jane = {
	address: '123 fake street',
	getFormalFullName: function() {
		return this.lastname + ' ' + this.firstname;
	}
}

var jim = {
	getFirstName: function() {
		return firstname;
	}
}

_.extend(john, jane, jim);

console.log('john')