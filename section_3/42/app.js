// A function that returns a function...
function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

// greet('Hello')('Jack')

var sayHi = greet('Hi');
sayHi('Jack');