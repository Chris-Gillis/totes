var expect = require('../lib/expect').expect;

var expectError = require('../lib/expect').expectError;

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
		expectError(function(){
			expect("different").is("strings");
		});
	});
});

describe('isExactly', function(){
	it("should work when exactly equal", function(){
		expect("string").isExactly("string");
	});

	it("should throw error when equal value but not type", function(){
		expectError(function(){
			expect(123).isExactly("123");
		});
	});
});

describe("isTruthy", function(){
	it("should work when truthy", function(){
		expect("truthy string").isTruthy();
	});

	it("should throw error when not truthy", function(){
		expectError(function(){
			expect(false).isTruthy();
		});

		expectError(function(){
			expect('').isTruthy();
		});

		expectError(function(){
			expect(undefined).isTruthy();
		})
	})
});