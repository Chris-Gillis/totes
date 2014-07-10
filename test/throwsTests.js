var expect = require('../lib/expect').expect;

describe('throws', function(){
	it('should fail when not a function', function(done){
		try{
			expect('obviously not a function').throws();

			throw new AssertionError('Expected throw');
		}
		catch(err){
			done();
		}
	});
	
	it('should catch an error and not report failure', function(){
		expect(throwFn).throws();
	});

	it('should fail when no error is thrown', function(done){
		try{
			expect(function(){}).throws()

			throw new AssertionError('Expected throw');
		}
		catch(err){
			done();
		}
	});
});


function throwFn(){
	throw new Error("I AM AN ERROR");
}
