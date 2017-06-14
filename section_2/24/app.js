function greet(name) {
  name = name || 'Please enter your name';
  console.log('Hello ' + name)
}
// Even if we dont pass it the expected argument, javascript wont care and will simply display undefined,
greet()
greet('Jack')
