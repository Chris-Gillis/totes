exports.expect = function(value){
	return new Assertable(value);
};

exports.assertable = Assertable;

var AssertionError = require('assertion-error');

function Assertable(value){
	this.value = value;

	this.isTrue = function(assertion, message, details){
		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;

		if(assertion(this.value) !== true){
			throw new AssertionError(message, details);
		}

		return this;
	}

	this.isFalse = function(assertion, message, details){
		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;

		if(assertion(this.value) !== false){
			throw new AssertionError(message, details);
		}

		return this;
	}
}

// import all extensions
require('./extensions')(Assertable);
