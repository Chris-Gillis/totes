var expect = require('../totes').expect;

describe('isLetters', function(){
	it('should pass when all lower case letters', function(){
		expect('lowercase').isLetters();
	});

	it('should pass when all upper case letters', function(){
		expect('UPPERCASE').isLetters();
	});

	it('should pass when all upper case or lower case letters', function(){
		expect('lowerAndUpperCase').isLetters();
	});	

	it('should fail when no letters present', function(){
		expect(assertion).throws();

		function assertion(){
			expect('12345').isLetters();
		}
	});

	it('should fail when letters and numbers present', function(){
		expect(assertion).throws();
		
		function assertion(){
			expect('99RedBalloons').isLetters();
		}
	});

	it('should fail when empty string', function(){
		expect(assertion).throws();

		function assertion(){
			expect('').isLetters();
		}
	});

	it('should fail when whitespace', function(){
		expect(justWhitespaceAssertion).throws();

		function justWhitespaceAssertion(){
			expect(' 	\n').isLetters()
		}

		expect(whitespaceAndLettersAssertion).throws();

		function whitespaceAndLettersAssertion(){
			expect('letters and	whitespace').isLetters();
		}
	});

	it('should fail when not a string', function(){
		expect(nullAssertion).throws();

		function nullAssertion(){
			expect(null).isLetters();
		}

		expect(undefinedAssertion).throws();

		function undefinedAssertion(){
			expect(undefined).isLetters();
		}

		expect(objectAssertion).throws();

		function objectAssertion(){
			expect({some: 'object'}).isLetters();
		}

		expect(arrayAssertion).throws()
	
		function arrayAssertion(){
			expect(['abc']).isLetters();
		}
	});
});

describe('isLetterOrWhitespace', function(){
	it('should pass when only letters and whitespace', function(){
		expect('letters AND	Whitespace').isLettersOrWhitespace();
	});

	it('should pass when only whitespace', function(){
		expect(' 	\n').isLettersOrWhitespace();
	});

	it('should fail when string has numbers', function(){
		expect(lettersWhitespaceAndNumbers).throws();

		function lettersWhitespaceAndNumbers(){
			expect('letters and 123').isLettersOrWhitespace();
		}

		expect(onlyNumbers).throws();

		function onlyNumbers(){
			expect('123').isLettersOrWhitespace();
		}

		expect(numbersAndLetters).throws();

		function numbersAndLetters(){
			expect('abc 123').isLettersOrWhitespace();
		}

		expect(numbersAndWhitespace).throws();

		function numbersAndWhitespace(){
			expect('123 456		789').isLettersOrWhitespace();
		}
	});

	it('should fail when not a string', function(){
		expect(nullAssertion).throws();

		function nullAssertion(){
			expect(null).isLettersOrWhitespace();
		}

		expect(undefinedAssertion).throws();

		function undefinedAssertion(){
			expect(undefined).isLettersOrWhitespace();
		}

		expect(objectAssertion).throws();

		function objectAssertion(){
			expect({some: 'object'}).isLettersOrWhitespace();
		}

		expect(arrayAssertion).throws()
	
		function arrayAssertion(){
			expect(['abc']).isLettersOrWhitespace();
		}
	});
});

describe('isWhitespace', function(){
	it('should pass when spaces', function(){
		expect('     ').isWhitespace();
	});

	it('should pass when tabs', function(){
		expect('	\t').isWhitespace();
	});

	it('should pass when newlines', function(){
		expect('\n').isWhitespace();
	});

	it('should pass when carriage return', function(){
		expect('\r').isWhitespace();
	});

	it('should pass when multiple kinds of whitespace', function(){
		expect(' 	\t\r\n').isWhitespace();
	});

	it('should fail when there are non-whitespace characters', function(){
		expect(assertion).throws();

		function assertion(){
			expect(' 	\t\r\n1').isWhitespace();
		}
	});

	it('should fail when not a string', function(){
		expect(nullAssertion).throws();

		function nullAssertion(){
			expect(null).isWhitespace();
		}

		expect(undefinedAssertion).throws();

		function undefinedAssertion(){
			expect(undefined).isWhitespace();
		}

		expect(objectAssertion).throws();

		function objectAssertion(){
			expect({some: 'object'}).isWhitespace();
		}

		expect(arrayAssertion).throws()
	
		function arrayAssertion(){
			expect(['abc']).isWhitespace();
		}
	});
});
