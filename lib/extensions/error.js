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

		if(!error){
			throw new AssertionError('Function did not throw as expected', {
				actual: 'Did not throw',
				expected: 'throws',
				showDiff: false
			});
		}

		return this;
	};
}
