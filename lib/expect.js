exports.expect = function(value){
	return new Assertable(value);
};

exports.assertable = Assertable;

var AssertionError = require('assertion-error');

function Assertable(value){
	this.value = value;

	this.internalIs = function is(assertion, expectedValue, message, details){

		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;
		details.expected = details.expected || expectedValue;

		if(assertion(this.value) != expectedValue){
			throw new AssertionError(message, details);
		}

		return this;
	};
}

// import all extensions
require('./extensions')(Assertable);
