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

describe('propertyIsTruthy', function(){
    it('should pass when object property is truthy', function(){
        expect({a: 1}).propertyIsTruthy('a');
        expect({a: '1'}).propertyIsTruthy('a');
        expect({a: []}).propertyIsTruthy('a');
        expect({a: {}}).propertyIsTruthy('a');
    });

    it('should fail when object property is not truthy', function(){
        var zeroTest = gen(0);
        var emptyStringTest = gen('');
        var nullTest = gen(null);
        var undefinedTest = gen();

        expect(zeroTest).throws();
        expect(emptyStringTest).throws();
        expect(nullTest).throws();
        expect(undefinedTest).throws();

        function gen(value){
            return function(){
                expect({a: value}).propertyIsTruthy('a');
            };
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

describe('isDeeplyEqualTo', function(){
	it('should fail when values are not objects', function(){
		expect(stringAssertion).throws();

		function stringAssertion(){
			expect('string').isDeeplyEqualTo('string');
		}

		expect(numberAssertion).throws();

		function numberAssertion(){
			expect(123).isDeeplyEqualTo(123);
		}
	});

	it('should pass when comparing two single level equivalent objects', function(){
		var left = {a: 1};
		var right = left;

		expect(left).isDeeplyEqualTo(right);
	});

	it('should pass when comparing two equivalent objects with one level of nesting', function(){
		var left = {a: 1, b: {c: 2}};
		var right = left;

		expect(left).isDeeplyEqualTo(right);
	});

	it('should pass when comparing two equivalent objects with many levels of nesting', function(){
		var leftTwoLevelsDeep = {a: {b: {c: 1}}, d: 'string'};
		var rightTwoLevelsDeep = leftTwoLevelsDeep;

		expect(leftTwoLevelsDeep).isDeeplyEqualTo(rightTwoLevelsDeep);

		var leftThreeLevelsDeep = {a: {b: {c: {d: 1}, e: 'string'}, f: 'another string'}};
		var rightThreeLevelsDeep = leftThreeLevelsDeep;

		expect(leftThreeLevelsDeep).isDeeplyEqualTo(rightThreeLevelsDeep);

		var leftFourLevelsDeep = {a: {b: {c: {d: {e: 1}, f: 'string'}, g: 123}, h: 0}};
		var rightFourLevelsDeep = leftFourLevelsDeep;

		expect(leftFourLevelsDeep).isDeeplyEqualTo(rightFourLevelsDeep);
	});

	it('should fail when comparing two non equivalent objects with 0 - 4 levels of  nesting', function(){
		var leftTwoLevelsDeep = {a: {b: {c: 1}}, d: 'string'};
		var rightTwoLevelsDeep = {a: {b: {c: 2}}, d: 'other string'}; 

		expect(twoLevelsAssertion).throws();

		function twoLevelsAssertion(){
			expect(leftTwoLevelsDeep).isDeeplyEqualTo(rightTwoLevelsDeep);
		}

		var leftThreeLevelsDeep = {a: {b: {c: {d: 1}, e: 'string'}, f: 'another string'}};
		var rightThreeLevelsDeep = {a: {b: {c: {d: 2}, e: 'other string'}, f: 'and yet another string'}};

		expect(threeLevelAssertion).throws();

		function threeLevelAssertion(){
			expect(leftThreeLevelsDeep).isDeeplyEqualTo(rightThreeLevelsDeep);
		}

		var leftFourLevelsDeep = {a: {b: {c: {d: {e: 1}, f: 'string'}, g: 123}, h: 0}};
		var rightFourLevelsDeep = {a: {b: {c: {d: {e: 2}, f: 'other string'}, g: 321}, h: 2}};

		expect(fourLevelAssertion).throws();

		function fourLevelAssertion(){
			expect(leftFourLevelsDeep).isDeeplyEqualTo(rightFourLevelsDeep);
		}
	});

	it('should fail when comparing two objects with different levels of nesting', function(){
		var left = {a: 1};
		var right = {a: 1, b: {c: 2}};	

		expect(forwards).throws();
		expect(backwards).throws();

		function forwards(){
			expect(left).isDeeplyEqualTo(right);
		}

		function backwards(){
			expect(right).isDeeplyEqualTo(left);
		}
	});

	it('should fail when objects do not have the same keys', function(){
		var left = {a: 1, b: 2, c: 3};
		var right = {d: 1, e: 2, f: 3};

		expect(forwards).throws();
		expect(backwards).throws();
		
		function forwards(){
			expect(left).isDeeplyEqualTo(right);
		}

		function backwards(){
			expect(right).isDeeplyEqualTo(left);
		}
	});
});
