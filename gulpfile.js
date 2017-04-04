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

// Build and export template
gulp.task('export', function () {

    // Get argument
    if (!argv.template && !argv.t)
        return console.log("Please enter template name \"gulp export --template <templatename>\" ");

    // Set template name and file path
    const templateName = argv.template || argv.t;
    const mainFile = './templates/' + templateName + '/index.pug';    
    const minify = (argv.minify)? false : true;
    
    console.log("Get main file : " + mainFile);

    // Start gulp
    return gulp.src(mainFile)
        .pipe(pug({
            pretty: minify
        }))
        .pipe(rename( templateName + '.xml'))
        .pipe(gulp.dest('./build'))
})

// Auto compile
gulp.task('autocompile', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
});