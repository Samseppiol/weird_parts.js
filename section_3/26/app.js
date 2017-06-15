var person = new Object();

person["firstname"] = "Jack";
person["lastname"] = "Hage"

var firstNameProperty = "firstname"

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname)

person.address = new Object();
person.address.street = "123 fake street"

console.log(person.address.street)
