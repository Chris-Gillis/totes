module.exports = function(assertable){
	assertable.prototype.is = function(expectedValue, message, details){
		return this.isTrue(check, message, details);

		function check(val){
			return val == expectedValue;
		}
	};

	assertable.prototype.isExactly = function(expectedValue, message, details){
		return this.isTrue(check, message, details);

		function check(val){
			return val === expectedValue;
		}
	};

	assertable.prototype.isTruthy = function(message, details){
		return this.isTrue(check, message, details);

		function check(val){
			return !!val;
		}
	};
}

