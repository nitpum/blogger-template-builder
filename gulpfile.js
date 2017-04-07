const gulp = require('gulp'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    pug = require('gulp-pug'),
    argv = require('yargs').argv,
    fs = require('fs'),
    path = require('path')


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

    let exportAll = false;

    // Get argument
    if (!argv.template && !argv.t)
         exportAll = true; // If on specific template then export all template

    // Options
    const minify = (argv.minify)? false : true;    

    if (exportAll)
    {
        // Export all template
        fs.readdirSync(path.join(__dirname, '/templates'))
            .filter(file => ~file.search(/^[^\.].*$/))
            .forEach(file => exportTemplate(
                {
                    name : file,
                    path : path.join(__dirname, '/templates', file, 'index.pug')
                }, {
                    // Options
                    minify : minify
                }));
    }else{
        // Export single template
        // Set template name and file path
        const templateName = argv.template || argv.t;

        exportTemplate(
            {
                name : templateName,
                path : path.join(__dirname, '/templates', templateName, 'index.pug')
            }, {
                // Options
                minify : minify
            });
        
    }
})

// Auto compile
gulp.task('autocompile', function () {
    gulp.watch('./src/less/**/*.less', ['less']);
});


/* Export template function
*/
function exportTemplate (template, opt) {

    if (!fs.existsSync(template.path))
        return;

    const mainFile = './templates/' + template.name + '/index.pug';    

    // Start gulp
    gulp.src(mainFile)
        .pipe(pug({
            pretty: opt.minify
        }))
        .pipe(rename( template.name + '.xml'))
        .pipe(gulp.dest('./build'))

    console.log("Export : " + template.name);
}