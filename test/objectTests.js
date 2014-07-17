var expect = require('../lib/expect').expect;

describe('hasProperty', function(){
	it('should pass when object has property', function(){
		expect({a: 1}).hasProperty('a');
	});	

	it('should fail when object does not have property', function(){
		expect(assertion).throws();

		function assertion(){
			expect({}).hasProperty('a');
		}
	});

	it('should fail when value is not an object', function(){
		expect(assertion).throws();

		function assertion(){
			expect('not an object').hasProperty('a');
		}
	});
});

describe('propertyIs', function(){
	it('should pass when object has property equal to', function(){
		expect({a: 1}).propertyIs('a', 1);	
		
		expect({a: 1}).propertyIs('a', '1');
	});

	it('should pass when object has property that can be coerced to the same value', function(){
		expect({a: 0}).propertyIs('a', false);

		expect({a: 0}).propertyIs('a', []);

		expect({a: 0}).propertyIs('a', '');
	});

	it('should fail when object has property but not equal to', function(){
		expect(assertion).throws();		

		function assertion(){
			expect({a: 1}).propertyIs('a', 2);
		}
	});

	it('should fail when object does not have the property', function(){
		expect(assertion).throws();

		function assertion(){
			expect({a: 1}).propertyIs('b', 1);
		}
	});

	it('should fail when not an object', function(){
		expect(stringAssertion).throws();
		
		function stringAssertion(){
			expect('not an object').propertyIs('a', 1);
		}

		expect(nullAssertion).throws();

		function nullAssertion(){
			expect(null).propertyIs('a', 1);
		}

		expect(undefinedAssertion).throws();

		function undefinedAssertion(){
			expect(undefined).propertyIs('a', 1);
		}

		expect(arrayAssertion).throws();

		function arrayAssertion(){
			expect(['a', 1]).propertyIs('a', 1);
		}
	});
});

describe('properyIsExactly', function(){
	it('should pass when object has property exactly equal to', function(){
		expect({a: 1}).propertyIsExactly('a', 1);	

		expect({a: null}).propertyIsExactly('a', null);

		expect({a: undefined}).propertyIsExactly('a', undefined);
	});

	it('should fail when object has property equal in value but not type', function(){
		expect(assertion).throws();

		function assertion(){
			expect({a: 1}).propertyIsExactly('a', '1');
		}
	});
	
	it('should fail when object can be coerced to the same value but is actually different value', function(){
		expect(zeroToFalse).throws();

		function zeroToFalse(){
			expect({a: 0}).propertyIsExactly('a', false);
		}

		expect(zeroToEmptyString).throws();

		function zeroToEmptyString(){
			expect({a: 0}).propertyIsExactly('a', '');
		}

		expect(zeroToEmptyArray).throws();

		function zeroToEmptyArray(){
			expect({a: 0}).propertyIsExactly('a', []);
		}
	});

	it('should fail when object has property but not equal to', function(){
		expect(assertion).throws();		

		function assertion(){
			expect({a: 1}).propertyIsExactly('a', 2);
		}
	});

	it('should fail when object does not have the property', function(){
		expect(assertion).throws();

		function assertion(){
			expect({a: 1}).propertyIsExactly('b', 1);
		}
	});

	it('should fail when not an object', function(){
		expect(stringAssertion).throws();
		
		function stringAssertion(){
			expect('not an object').propertyIsExactly('a', 1);
		}

		expect(nullAssertion).throws();

		function nullAssertion(){
			expect(null).propertyIsExactly('a', 1);
		}

		expect(undefinedAssertion).throws();

		function undefinedAssertion(){
			expect(undefined).propertyIsExactly('a', 1);
		}

		expect(arrayAssertion).throws();

		function arrayAssertion(){
			expect(['a', 1]).propertyIsExactly('a', 1);
		}
	});
});
