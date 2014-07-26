var AssertionError = require('assertion-error');

module.exports = function(assertable){
	assertable.prototype.throws = function(){
		if(typeof this.value !== 'function'){
			throw new AssertionError(".throws can only be asserted on functions", {
				actual: 'attempting to assert .throws on a non function',
				expected: 'a function',
				showDiff: false
			});
		}

		var error;

		try{
			this.value();
		}
		catch(e){
			error = e;
		}

		return this.isTrue(assertion, 'Function did not throw as expected', {
			actual: 'did not throw',
			expected: 'did throw'
		});

		function assertion(){
			return typeof error !== 'undefined';
		}
	};
}
