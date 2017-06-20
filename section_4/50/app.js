var person = {
	firstname: 'default',
	lastname: 'default',

	getfullName: function() {
		return this.firstname + ' ' + this.lastname;
	}
}

var john = {
	firstname: 'John',
	lastname: 'Doe'
}

// Only for demo, will drastically slow down real world applications

// If I try to find an object or method on john and it cant find it, it will go to person next and try.
john.__proto__ = person;

console.log(john.firstname);
console.log(john.getFullName);


var jack = {
	firstname: 'Jack'
}

jack.__proto__ = person;

console.log(jack.getFullName)