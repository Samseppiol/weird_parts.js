var person = {
    firstname: 'Jack',
    lastname: 'Hage',
    address: {
        street: '123 fake street',
        city: 'Melbourne',
        state: 'VIC'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname)
}


console.log(person)

console.log(person.address)

greet(person);

greet({
    firstname: 'John',
    lastname: 'Doe'
})