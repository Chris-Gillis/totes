module.exports = function(assertable){
	require('./error')(assertable);
	require('./is')(assertable);
	require('./numeric')(assertable);
	require('./objects')(assertable);
	require('./strings')(assertable);
};
