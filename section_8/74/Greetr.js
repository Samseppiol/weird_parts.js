(function(global, $) {


	// 'new' an object
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// hidden within the scope of the IIFE and never directly accessible
	var supportedLangs = ['en', 'es'];

	// Informal greetings
	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};


	var formalGreetings = {
		en: "G'day mate",
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged',
		es: 'Inicio sesion'
	};

	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw 'invalid language';
			}
		},

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		}, 

		greet: function(formal) {
			var msg;

			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting()
			}

			if (console) {
				console.log(msg);
			}

			return this;
		},

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
				
			}

			return this;
		},

		setLang: function(lang) {
			this.language = lang;

			this.validate();
			
			return this;
		},

		HTMLGreeting: function(selector, formal) {
			if (!$) {
				throw 'Jquery not loaded';
			}

			if (!selector) {
				throw 'Missing jquery selector';
			}

			var msg;
			if (formal) {
				msg = this.formalGreeting();
			}
			else {
				msg = this.greeting();
			}
			
			$(selector).html(msg);

			return this;
		}


	};

	

	Greetr.init = function(firstName, lastName, language) {

		this.firstName = firstName || 'John'
		this.lastName = lastName || 'Doe'
		this.language = language || 'EN'

	}

	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;

}(window, jQuery));