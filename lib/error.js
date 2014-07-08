module.exports = function AssertionError(expected, actual){
	this.expected = expected;
	this.actual = actual;
};


var Assertable = require('./assertable');

Assertable.prototype.throws = function(){
	if(typeof this.value !== 'function'){
		throw new Error(".throws can only be asserted on functions");
	}

	var error;

	try{
		this.value();
	}
	catch(e){
		error = e;
	}

	if(!error){
		throw new AssertionError();
	}

	return this;
};