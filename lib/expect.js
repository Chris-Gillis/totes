var Assertable = require('./assertable');

exports.expect = function(value){
	return new Assertable(value);
};

exports.expectError = function(fn){
	var error;

	try{
		fn();
	}
	catch(e){
		error = e;
	}

	if(!error){
		throw new AssertionException();
	}
};