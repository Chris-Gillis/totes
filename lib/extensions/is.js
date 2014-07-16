module.exports = function(assertable){
	assertable.prototype.is = function(expectedValue, message, details){

		message = message || 'Failed is() assertion.';

		details = updateDetails(details, expectedValue);

		return this.isTrue(check, message, details);

		function check(val){
			return val == expectedValue;
		}
	};

	assertable.prototype.isExactly = function(expectedValue, message, details){
		
		message = message || 'Failed isExactly() assertion';

		details = updateDetails(details, expectedValue);

		return this.isTrue(check, message, details);

		function check(val){
			return val === expectedValue;
		}
	};

	assertable.prototype.isTruthy = function(message, details){
		message = message || 'Failed isTruthy() assertion';

		details = updateDetails(details, 'truthy');

		return this.isTrue(check, message, details);

		function check(val){
			return !!val;
		}
	};

	function updateDetails(details, expectedValue){
		details = details || {};
		details.expected = details.expected || expectedValue;
		details.actual = this.value;

		return details;
	}
}

