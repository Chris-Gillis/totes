exports.expect = function(value){
	return new Assertable(value);
};

var AssertionError = require('assertion-error');

function Assertable(value){
  this.value = value;

  this.internalIs = function is(assertion, expectedValue){
  	if(assertion(this.value) != expectedValue){
      throw new AssertionError('Failed assertion!', {
        actual: this.value,
        expected: expectedValue,
        showDiff: true
      });
    }

    return this;
  };
}

// import all expansions
require('./extensions')(Assertable);
