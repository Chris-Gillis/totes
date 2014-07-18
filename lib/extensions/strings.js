module.exports = function(assertable){
	assertable.prototype.isOnlyLetters = function(message, details){
		message = message || 'Failed isLetters assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var letterRegex = /^[A-Za-z]+$/;

			return letterRegex.test(this.value);
		}
	};
};
