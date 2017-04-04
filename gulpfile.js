const gulp = require('gulp'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    pug = require('gulp-pug')
    argv = require('yargs').argv


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

// Build template
gulp.task('export', function () {
    if (!argv.template)
        return console.log("Please enter template name --template <templatename>");

    const templateName = argv.template;

    return gulp.src('./templates/' + templateName + '/index.pug')
        .pipe(pug(

        ))
        .pipe(rename( templateName + '.xml'))
        .pipe(gulp.dest('./build'))
})

// Auto compile
gulp.task('autocompile', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
});