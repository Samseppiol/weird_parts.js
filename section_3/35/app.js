function greet(firstname, lastname, language) {

    // We can even set a default value so it is never undefined 

    language = language || 'english'
    console.log(firstname)
    console.log(lastname)
    console.log(language)

}
// Most languages will throw an error because you havent given the arguments expected.
// Javascript doesnt care and will simply display undefined
greet()

// Even if we only give one argument it will still run, giving the two empty values undefined
greet('john')