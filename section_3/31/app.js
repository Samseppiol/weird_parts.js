// by value (primitives)
var a = 3;
var b;

b = a;
a = 2
console.log(a)
console.log(b)

// By reference, all objects including functions

var c = { greeting: 'hello' };
var d;
// Simply points d at the same point of memory as c, they are not copies of each other!
d = c
c.greeting = 'Hi'; // Mutating the value

console.log(c)
console.log(d)

// By reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d)

console.log(c)
console.log(d)

// equals operator sets up new memory space

c = { greeting: 'howdy' };
console.log(c)
console.log(d)