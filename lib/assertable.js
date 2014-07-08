module.exports = Assertable;

var AssertionError = require('./error');

function Assertable(value){
	this.value = value;

	this.internalIs = function is(assertion, expectedValue){
		if(assertion(this.value) != expectedValue){
			throw new AssertionError();
		}

		return this;
	};
}

Assertable.prototype.is = function(expectedValue){
	return this.internalIs(identity, expectedValue);
};

Assertable.prototype.isExactly = function(expectedValue){
	return this.internalIs(function(val){
		return val === expectedValue
	}, true);
};

Assertable.prototype.isTruthy = function(){
	return this.internalIs(function(val){
		return !!val;
	}, true);
};

function identity(i){
	return i;
}