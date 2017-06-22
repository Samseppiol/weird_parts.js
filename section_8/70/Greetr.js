(function(global, $) {

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	Greetr.prototype = {};

	Greetr.init = function(firstName, lastName, language) {

		this.firstName = firstName || 'John'
		this.lastName = lastName || 'Doe'
		this.language = language || 'EN'

	}

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));