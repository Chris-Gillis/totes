var gulp = require('gulp');

var shell = require('gulp-shell');

gulp.task('test', function(){
	return gulp.watch(['lib/**/*.js', 'test/**/*.js'], function(){
		gulp.src('')
		.pipe(shell('npm test'));
	});	
});
