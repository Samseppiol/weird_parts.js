// Function statement
function greet(name) {
    console.log('hello ' + name)
};

greet('jack');

// Function expression
var greetFunc = function(name) {
    console.log('hello ' + name)
};

greetFunc('Jane');

// Immedaitely Invoked Function Expression
var greeting = function(name) {
    return 'Hello ' + name;

}('Jordan');

console.log(greeting);

// When you want to create a function expression wrap it in parentheses 
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name)
}('Jaime'));
// Classic example of immediately invoked function expression