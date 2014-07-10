var expect = require('../totes').expect; 

var AssertionError = require('assertion-error');

describe('internalIs', function(){
	it('should throw when assertion fails', function(done){
		try{
			expect('test string').internalIs(identity, 'not test string');
			throw new AssertionError('Assertion did not throw')
		}
		catch(e){
			done();
		}
	});

	it('should not throw when assertion succeeds', function(){
		expect('test string').internalIs(identity, 'test string');
	});
});

function identity(i){
	return i;
}
