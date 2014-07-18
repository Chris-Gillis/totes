var expect = require('../totes').expect;

describe('isOnlyLetters', function(){
	it('should pass when all lower case letters', function(){
		expect('lower case').isOnlyLetters();
	});

	it('should pass when all upper case letters', function(){
		expect('UPPER CASE').isOnlyLetters();
	});

	it('should pass when all upper case or lower case letters', function(){
		expect('lower and UPPER CASE').isOnlyLetters();
	});	

	it('should fail when no letters present', function(){
		expect('12345 54321').isOnlyLetters();
	});

	it('should fail when letters and numbers present', function(){
		expect('99 red balloons').isOnlyLetters();
	});
});
