require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Focm2+":[function(require,module,exports){
exports.expect = require('./lib/expect').expect;

exports.assertable = require('./lib/expect').assertable;

},{"./lib/expect":3}],"totes":[function(require,module,exports){
module.exports=require('Focm2+');
},{}],3:[function(require,module,exports){
exports.expect = function(value){
	return new Assertable(value);
};

exports.assertable = Assertable;

var AssertionError = require('assertion-error');

function Assertable(value){
	this.value = value;

	this.isTrue = function(assertion, message, details){
		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;

		if(assertion(this.value) !== true){
			throw new AssertionError(message, details);
		}

		return this;
	}

	this.isFalse = function(assertion, message, details){
		message = message || 'Failed assertion';

		details = details || {};
		details.actual = details.actual || this.value;

		if(assertion(this.value) !== false){
			throw new AssertionError(message, details);
		}

		return this;
	}
}

// import all extensions
require('./extensions')(Assertable);

},{"./extensions":5,"assertion-error":10}],4:[function(require,module,exports){
var AssertionError = require('assertion-error');

module.exports = function(assertable){
	assertable.prototype.throws = function(){
		if(typeof this.value !== 'function'){
			throw new AssertionError(".throws can only be asserted on functions", {
				actual: 'attempting to assert .throws on a non function',
				expected: 'a function',
				showDiff: false
			});
		}

		var error;

		try{
			this.value();
		}
		catch(e){
			error = e;
		}

		return this.isTruthy(error, 'Function did not throw as expected', {
			actual: 'did not throw',
			expected: 'did throw'
		});
	};
}

},{"assertion-error":10}],5:[function(require,module,exports){
module.exports = function(assertable){
	require('./error')(assertable);
	require('./is')(assertable);
	require('./numeric')(assertable);
	require('./objects')(assertable);
	require('./strings')(assertable);
};

},{"./error":4,"./is":6,"./numeric":7,"./objects":8,"./strings":9}],6:[function(require,module,exports){
module.exports = function(assertable){
	assertable.prototype.is = function(expectedValue, message, details){

		message = message || 'Failed is() assertion.';

		details = updateDetails(details, expectedValue);

		return this.isTrue(check, message, details);

		function check(val){
			return val == expectedValue;
		}
	};

	assertable.prototype.isExactly = function(expectedValue, message, details){
		
		message = message || 'Failed isExactly() assertion';

		details = updateDetails(details, expectedValue);

		return this.isTrue(check, message, details);

		function check(val){
			return val === expectedValue;
		}
	};

	assertable.prototype.isTruthy = function(message, details){
		message = message || 'Failed isTruthy() assertion';

		details = updateDetails(details, 'truthy');

		return this.isTrue(check, message, details);

		function check(val){
			return !!val;
		}
	};

	function updateDetails(details, expectedValue){
		details = details || {};
		details.expected = details.expected || expectedValue;
		details.actual = this.value;

		return details;
	}
}


},{}],7:[function(require,module,exports){
module.exports = function(assertable){
	assertable.prototype.isNumeric = function(){
		return this.isTrue(check, 'Failed isNumeric() assertion', {
			actual: this.value,
			expected: 'numeric value'
		});

		function check(val){
			return !isNaN(parseFloat(val));
		}
	};

	assertable.prototype.isNumber = function(){
		return this.isTrue(check, 'Failed isNumber() assertion', {
			actual: typeof(this.value),
			expected: 'number'
		});

		function check(val){
			return typeof(val) === 'number';
		}
	};

	assertable.prototype.isPositive = function(){
		return this.isTrue(check, 'Failed isPositive() assertion', {
			actual: 'zero or negative - value: ' + this.value,
			expected: 'positive'
		});

		function check(val){
			if(typeof(val) === 'string'){
				val = parseFloat(val);
			}

			return val > 0;
		}
	};

	assertable.prototype.isNegative = function(){
		return this.isTrue(check, 'Failed isPositive() assertion', {
			actual: 'zero or negative - value: ' + this.value,
			expected: 'positive'
		});

		function check(val){
			if(typeof(val) === 'string'){
				val = parseFloat(val);
			}

			return val < 0;
		}
	};

	assertable.prototype.isZero = function(){
		return this.isTrue(check, 'Failed isZero() assertion', {
			actual: this.value,
			expected: '0'
		});

		function check(val){
			return val === 0;
		}
	};
}


},{}],8:[function(require,module,exports){
module.exports = function(assertable){
	assertable.prototype.hasProperty = function(prop){
		return this.isTrue(check, 'Failed hasProperty() assertion', {
			actual: 'Does not have property',
			expected: 'Has property'
		});

		function check(obj){
			return !!obj[prop];
		}
	};
	
	assertable.prototype.propertyIs = function(property, value){
		return this.isTrue(check, 'Failed propertyIs() assertion', {
			actual: this.value[property],
			expected: value
		});

		function check(val){
			return val[property] == value;
		}
	};

	assertable.prototype.propertyIsExactly = function(property, value){
		return this.isTrue(check, 'Failed propertyIsExactly() assertion', {
			actual: this.value[property] + ' with type ' + typeof(this.value[property]),
			expected: value + ' with type ' + typeof(value)
		});

		function check(val){
			return val[property] === value;
		}
	};
};

},{}],9:[function(require,module,exports){
module.exports = function(assertable){
	assertable.prototype.isLetters = function(message, details){
		message = message || 'Failed isLetters assertion';

		return this.isTrue(check, message, details);

		function check(val){
			if(typeof(val) !== 'string'){
				return false;
			}

			var letterRegex = /^[A-Za-z]+$/;

			return letterRegex.test(val);
		}
	};

	assertable.prototype.isLettersOrWhitespace = function(message, details){
		message = message || 'Failed isOnlyLettersAndWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[A-Za-z\s]+$/;

			return regex.test(val);
		}
	};

	assertable.prototype.isWhitespace = function(message, details){
		message = message || 'Failed isOnlyWhitespace assertion';

		return this.isTrue(check, message, details);

		function check(val){
			var regex = /^[\s]*$/;	

			return regex.test(val);
		}
	};
};

},{}],10:[function(require,module,exports){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};

},{}]},{},[])