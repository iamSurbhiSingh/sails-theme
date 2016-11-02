var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');

gulp.task('default', function(){
   return gutil.log("Gulp is running");
});

gulp.task('sass', function(){
	gulp.src('./custom/sass/style.scss').pipe(sass())
		.pipe(gulp.dest('./custom/css/'));
});

gulp.task('watch', function(){
	gulp.watch('./custom/sass/style.scss', ['sass']);
});
