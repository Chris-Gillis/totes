module.exports = function(assertable){
	require('./error')(assertable);
	require('./is')(assertable);
};
