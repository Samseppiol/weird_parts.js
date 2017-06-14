console.log(1 < 2 < 3);

// But if we turn it around like so:
console.log(3 < 2 < 1)
// It will return false because of the order of operations. Essentially what this is saying
// is 3 < 2 which is false, then it is saying is false < 1 which is false so the console will display false.
var a = 0;
var b = false
if (a === b) {
  console.log('Equality!')
} else {
    console.log('Nope')
}
