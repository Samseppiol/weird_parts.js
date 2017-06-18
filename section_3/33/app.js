function a() {
    console.log(this)
    this.newvar = 'test'
}

var b = function() {
    console.log(this)
}

// Will both return the same thing.
a();

console.log(newvar)
b();


// You can actually mutate the whole object by using the 'this' value
var c = {
    name: 'Hello',
    log: function() {
        this.name = 'updated hello'
        console.log(this)
    }
}

//  This will show the whole function within the console.
c.log();