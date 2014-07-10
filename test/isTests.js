var expect = require('../lib/expect').expect;

describe("is", function(){
	it("should work when equal strings", function(){
		expect("string").is("string");
	});

	it("should work when equal numbers", function(){
		expect(123).is(123);
	});

	it("should work when equal in value but not in type", function(){
		expect(123).is("123");
	});

	it("should throw error when not equal", function(){
		expect(function(){ expect("different").is("strings"); }).throws();
	});
});

describe('isExactly', function(){
	it("should work when exactly equal", function(){
		expect("string").isExactly("string");
	});

	it("should throw error when equal value but not type", function(){
		expect(function(){ expect(123).isExactly("123"); }).throws();
	});
});

describe("isTruthy", function(){
	it("should work when truthy", function(){
		expect("truthy string").isTruthy();
	});

	it("should throw error when not truthy", function(){
		expect(function(){ expect(false).isTruthy(); }).throws();

		expect(function(){ expect('').isTruthy(); }).throws();

		expect(function(){ expect(undefined).isTruthy(); }).throws();
	})
});
