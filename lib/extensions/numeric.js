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

