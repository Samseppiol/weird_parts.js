// In this instance number is the in0built javascript function
var a = new Number(3)

var b = new String("John")

// All string objects will look at when they are going down the prototype chain
String.prototype.isLengthGreaterThan = function(limit) {
	return this.length > limit;
}

console.log("John".isLengthGreaterThan(3))