module.exports = function(assertable){
	assertable.prototype.isLetters = function(message, details){
		message = message || 'Failed isLetters assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[A-Za-z]+$/;

			return typeof(val) === 'string' && regex.test(val);
		}
	};

	assertable.prototype.isLettersOrWhitespace = function(message, details){
		message = message || 'Failed isOnlyLettersAndWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[A-Za-z\s]+$/;

			return typeof(val) === 'string' && regex.test(val);
		}
	};

	assertable.prototype.isWhitespace = function(message, details){
		message = message || 'Failed isOnlyWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[\s]*$/;	

			return typeof(val) === 'string' && regex.test(val);
		}
	};
};
