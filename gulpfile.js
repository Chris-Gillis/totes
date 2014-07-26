var gulp = require('gulp');

var shell = require('gulp-shell');

gulp.task('test', function(){
	gulp.src('').pipe(shell('npm test'));

	return gulp.watch(['lib/**/*.js', 'test/**/*.js'], function(){
		gulp.src('')
		.pipe(shell('npm test'));
	});	
});

gulp.task('build', function(){
	gulp.src('').pipe(shell('browserify -r ./index.js:totes > totes.js'));
});
