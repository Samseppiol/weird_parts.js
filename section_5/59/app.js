var person = {
	firstname: 'Default',
	lastname: 'default',

	greet: function() {
			return 'Hi ' + this.firstname;
	}
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
// Unless you set the values of the new objects, they 
// Will display an empty object, but the prototype will point at whatever you passed in.
console.log(john)