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
