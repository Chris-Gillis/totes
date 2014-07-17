var expect = require('../lib/expect').expect;

describe('hasProperty', function(){
	it('should pass when object has property', function(){
		expect({a: 1}).hasProperty('a');
	});	

	it('should fail when object does not have property', function(){
		var assertion = expect({}).hasProperty;

		expect(test).throws();

		function test(){
			expect({}).hasProperty('a');
		}
	});

	it('should fail when value is not an object', function(){
		expect(test).throws();

		function test(){
			expect('not an object').hasProperty('a');
		}
	});
});

describe('propertyIs', function(){
	it('should pass when object has property equal to', function(){
		expect({a: 1}).propertyIs('a', 1);	
	});
});
