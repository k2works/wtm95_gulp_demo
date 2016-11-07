var gulp					= require('gulp');
var sass					= require('gulp-sass');
var autoprefixer	= require('gulp-autoprefixer');
var plumber				= require('gulp-plumber');
var sourcemaps 		= require('gulp-sourcemaps');


gulp.task('sass', function(){
	gulp.src('htdocs/common/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('../map'))
	.pipe(gulp.dest('htdocs/common/css'));
});

gulp.task('watch', function(){
	gulp.watch('htdocs/common/sass/*.scss',function() {
		gulp.run('sass');
	});
});

gulp.task('default', ['watch']);