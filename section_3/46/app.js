var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('**************');
}.bind(person)

var logPersonName = logName.bind(person);

logPersonName('English');

logName.call(person, 'en', 'es')

// The apply method wants an array of whatever you are passing 

var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('**************');
}.apply(person, ['es', 'en'])

// Borrowing a function
var person2 = {
	firstname: 'Jane',
	lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying, mmmmmm curry 

function multiply(a, b) {
	return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
