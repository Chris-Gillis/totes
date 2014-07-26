var gulp = require('gulp');

var shell = require('gulp-shell');

gulp.task('test', function(){
	gulp.src('').pipe(shell('npm test'));

	return gulp.watch(['lib/**/*.js', 'test/**/*.js'], function(){
		gulp.src('')
		.pipe(shell('npm test'));
	});	
});

var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('build', function(){
	gulp.src('./index.js')
		.pipe(browserify({ standAlone: true }))
		.pipe(rename('totes.js'))
		.pipe(gulp.dest('./'));
});
