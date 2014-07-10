module.exports = function(assertable){
	assertable.prototype.is = function(expectedValue){
		return this.internalIs(identity, expectedValue);
	};

	assertable.prototype.isExactly = function(expectedValue, message, details){
		return this.internalIs(function(val){
			return val === expectedValue
		}, true, message, details);
	};

	assertable.prototype.isTruthy = function(message, details){
		return this.internalIs(function(val){
			return !!val;
		}, true, message, details);
	};

	function identity(i){
		return i;
	}
}

