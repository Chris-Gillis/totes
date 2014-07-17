var expect = require('../lib/expect').expect;


describe('isNumeric', function(){
	it('should pass when value is a float', function(){
		expect(123).isNumeric();

		expect('123').isNumeric();
	});

	it('should fail when value is non numeric string', function(){
		var assertion = expect('not a number').isNumeric;
		
		expect(assertion).throws();
	});

	it('should fail when value is null, undefined, true, or false', function(){
		var nullAssertion = expect(null).isNumeric;
		expect(nullAssertion).throws();

		var undefinedAssertion = expect(undefined).isNumeric;
		expect(undefinedAssertion).throws();

		var trueAssertion = expect(true).isNumeric;
		expect(trueAssertion).throws();

		var falseAssertion = expect(false).isNumeric;
		expect(falseAssertion).throws();
	});
});

describe('isNumber', function(){
	it('should pass when value is a number', function(){
		expect(123).isNumber();
	});

	it('should fail when value is not a number', function(){
		var assertion = expect('123').isNumber;

		expect(assertion).throws();
	});

	it('should fail when value is null, undefined, true, or false', function(){
		var nullAssertion = expect(null).isNumber;
		expect(nullAssertion).throws();

		var undefinedAssertion = expect(undefined).isNumber;
		expect(undefinedAssertion).throws();

		var trueAssertion = expect(true).isNumber;
		expect(trueAssertion).throws();

		var falseAssertion = expect(false).isNumber;
		expect(falseAssertion).throws();
	});
});

describe('isPositive', function(){
	it('should pass when value is a positive number', function(){
		expect(1).isPositive();
	});

	it('should fail when value is zero', function(){
		var assertion = expect(0).isPositive;

		expect(assertion).throws();
	});

	it('should fail when value is negative number', function(){
		var assertion = expect(-1).isPositive;

		expect(assertion).throws();
	});

	it('should fail when value is not a number', function(){
		var stringAssertion = expect('1').isPositive;
		expect(stringAssertion).throws();

		var objectAssertion = expect({num: 1}).isPositive;
		expect(objectAssertion).throws();

		var arrayAssertion = expect([1]).isPositive;
		expect(arrayAssertion).throws();

		var nullAssertion = expect(null).isPositive;
		expect(nullAssertion).throws();

		var undefinedAssertion = expect(undefined).isPositive;
		expect(undefinedAssertion).throws();
	});
});

describe('isNegative', function(){
	it('should pass when value is a negative number', function(){
		expect(-1).isNegative();
	});

	it('should fail when value is zero', function(){
		var assertion = expect(0).isNegative;

		expect(assertion).throws();
	});

	it('should fail when value is positive number', function(){
		var assertion = expect(1).isNegative;

		expect(assertion).throws();
	});

	it('should fail when value is not a number', function(){
		var stringAssertion = expect('-1').isNegative;
		expect(stringAssertion).throws();

		var objectAssertion = expect({num: -1}).isNegative;
		expect(objectAssertion).throws();

		var arrayAssertion = expect([-1]).isNegative;
		expect(arrayAssertion).throws();

		var nullAssertion = expect(null).isNegative;
		expect(nullAssertion).throws();

		var undefinedAssertion = expect(undefined).isNegative;
		expect(undefinedAssertion).throws();
	});
});








