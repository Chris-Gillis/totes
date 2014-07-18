module.exports = function(assertable){
	assertable.prototype.isLetters = function(message, details){
		message = message || 'Failed isLetters assertion';

		return this.isTrue(check, message, details);

		function check(val){
			if(typeof(val) !== 'string'){
				return false;
			}

			var letterRegex = /^[A-Za-z]+$/;

			return letterRegex.test(val);
		}
	};

	assertable.prototype.isLettersOrWhitespace = function(message, details){
		message = message || 'Failed isOnlyLettersAndWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[A-Za-z\s]+$/;

			return regex.test(val);
		}
	};

	assertable.prototype.isWhitespace = function(message, details){
		message = message || 'Failed isOnlyWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[\s]*$/;	

			return regex.test(val);
		}
	};
};
