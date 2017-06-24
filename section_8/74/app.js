
// New object, architecture of library allows us to not have to use the 'new' keyword
var g = G$('Jane');

//  Use chainable methods
g.greet().greet(true).log(;

// Use the object on a click login button
$('#login').click(function() {
    
    //  
    var loginGrtr= G$('John', 'Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#wlang').val()).HTMLGreeting('#greeting', true).log();
});