function sayHiLater() {
	var greeting = 'Hi!';

	setTimeout(function(){
		console.log(greeting);
	}, 3000);
}

sayHiLater();

// Jquery uses function expressions and first class functions
$('button').click(function() {

});

function tellMeWhenDone(elephant) {
	var a = 1000; 
	var b = 2000;

	elephant();
}

tellMeWhenDone(function() {
	alert('I am done')
})