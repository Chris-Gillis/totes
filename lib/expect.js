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

		var result = assertion(this.value);

		if(result !== true){
			throw new AssertionError(message, details);
		}

		return result || this;
	}

	this.isFalse = function(assertion, message, details){
		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;

		var result = assertion(this.value);

		if(result !== false){
			throw new AssertionError(message, details);
		}

		return result || this;
	}
}

// import all extensions
require('./extensions')(Assertable);
