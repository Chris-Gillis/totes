var Assertable = require('./assertable');

exports.expect = function(value){
	return new Assertable(value);
};