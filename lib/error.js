module.exports = function AssertionError(expected, actual){
	this.expected = expected;
	this.actual = actual;
}