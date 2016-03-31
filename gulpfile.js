var gulp = require('gulp')
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var del = require('del');
var gulpFilter = require('gulp-filter');

var filter = gulpFilter(['script.js'], {restore: true}); // files to ignore

gulp.task('js-linting-compiling', function(){
    return gulp.src(['lib/jquery-1.12.2.js', // source files
		     'lib/jquery-ui.js',
		     'lib/jquery.dd.js',
		     'howler.min.js',
		     'gifshot.js',
		     'script.js'
		    ])
	.pipe(filter)                  // ignore some files during jshint task
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(filter.restore)
        .pipe(concat('script.min.js')) // concatenate source files into one
	.pipe(gulp.dest('./'))         // destination directory
	.pipe(rename('script.min.js')) // rename the output file
	.pipe(uglify())          // minifies javascript
	.pipe(gulp.dest('./'));	// destination of output file
});


gulp.task('clean-files', function(){
    return del(['script.min.js', 'css/style.min.css']);
});


gulp.task('minify-css', function(){
    return gulp.src(['css/dd.css',
		     'css/foundation.css',
		     'css/app.css',
		     'css/animate.css',
		     'css/style.css'
		    ])
	.pipe(minifyCSS({compatibility: 'ie8'}))
	.pipe(concat('style.min.css')) // the destination file
	.pipe(gulp.dest('css'));
});


gulp.task('watch', function(){
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('./script.js', ['js-linting-compiling']);
});


gulp.task('default', ['clean-files','js-linting-compiling', 'minify-css']);
