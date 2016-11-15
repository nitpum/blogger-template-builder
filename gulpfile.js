var gulp = require('gulp');
var less = require('gulp-less');

/**
 * Compile less to css and minify
 */
gulp.task('less', function () {

    gulp.src('./src/less/**/*.less')
        .pipe(less({
            compress:true
        }))
        .pipe(gulp.dest('./src/css/'));

});

// Auto compile
gulp.task('autocompile', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
});