module.exports = function(assertable){
	assertable.prototype.is = function(expectedValue){
			return this.internalIs(identity, expectedValue);
	};

	assertable.prototype.isExactly = function(expectedValue){
			return this.internalIs(function(val){
						return val === expectedValue
					}, true);
	};

	assertable.prototype.isTruthy = function(){
			return this.internalIs(function(val){
						return !!val;
							}, true);
	};

	function identity(i){
			return i;
	}
}

