var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),                                        // for minifying the css
    concat = require('gulp-concat'),                                                    // concatinating the resources both js and css
    uglify = require('gulp-uglify'),                                                    // minifying the js files. triggered only in 'deploy' task below
    clean = require('gulp-clean'),                                                        // removing files from a directory
    jshint = require('gulp-jshint'),                                                    // check the validity of js files
    stylish = require('jshint-stylish'),                                            // to display the jshint messages in a human readable format with line number and file name
    templateCache = require('gulp-angular-templatecache'),        // to cache angular.js templates
    htmlmin = require('gulp-htmlmin'),                                                // to minify html templates
    ngmin = require('gulp-ng-annotate');


// Setting up the js, css src n destination directories.
// Follows ng-boilerplate directory structure by default.
// Change the variables below to suit for project needs.
var options = new function() {
    
    this.PARTIALS_SRC = 'app/js/**/*.tpl',
    this.ANGULAR_MODULE_NAME = 'app',

    this.JS_SRC = ['app/libs/js/**/*.js','app/js/app.js', 'app/js/**/*.js'],      // 0 index must be libs libs for convention sake
    this.CSS_SRC = ['app/libs/css/**/*.css', 'app/css/**/*.css'], // 0 index must be libs libs for convention sake

    this.DIST_SRC = 'static/',    // specific to spring-starter-project. change to suit your project needs.
    
    this.PARTIALS_DEST = 'app/js/bin/template',
    this.JS_DEST = this.DIST_SRC + '/js',
    this.CSS_DEST = this.DIST_SRC + '/css',

    this.JS_DEST_NAME = 'app.min.js',
    this.CSS_DEST_NAME = 'app.min.css',
    this.TEMPLATES_DEST_NAME = 'templates.js'                                        
};

gulp.task('template-cache', function () {
    return gulp.src(options.PARTIALS_SRC)
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(templateCache(options.TEMPLATES_DEST_NAME, {module: options.ANGULAR_MODULE_NAME}))
        .pipe(gulp.dest(options.PARTIALS_DEST));
});

gulp.task('jshint', function() {
    return gulp.src(options.JS_SRC.concat( '!' + options.JS_SRC[0] )                    // excluding libs libs from lint checking
            .concat( '!' + options.PARTIALS_DEST + '/**/*.js'))                                        // excluding angular templates from lint checking
        .pipe(jshint( {globals:{angular: true}} ))                                                            // adding angular to global scope to avoid angular not found errors in lint
        .pipe(jshint.reporter(stylish));
});

gulp.task('js', ['jshint', 'template-cache'], function() {
    return gulp.src(options.JS_SRC)
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(options.JS_DEST));
});

// not minifying the files for debugging purposes.
gulp.task('js-dev', ['jshint', 'template-cache'], function() {
    return gulp.src(options.JS_SRC)
        .pipe(concat(options.JS_DEST_NAME))
        .pipe(gulp.dest(options.JS_DEST));
});

gulp.task('css', function() {
    return gulp.src(options.CSS_SRC)
        .pipe(concat(options.CSS_DEST_NAME))
        .pipe(minifycss())
        .pipe(gulp.dest(options.CSS_DEST));
});

// not minifying the files for debugging purposes.
gulp.task('css-dev', function() {
    return gulp.src(options.CSS_SRC)
        .pipe(concat(options.CSS_DEST_NAME))
        .pipe(gulp.dest(options.CSS_DEST));
});

gulp.task('clean', function() {
    return gulp.src([options.DIST_SRC + '/*']
            .concat(options.PARTIALS_DEST + '/*'), {read: false})
        .pipe(clean( {force: true} ));
});

gulp.task('deploy', [ 'js', 'css']);

gulp.task('default', ['js-dev', 'css-dev'], function() {
    gulp.watch(options.JS_SRC, ['js-dev']);
    gulp.watch(options.CSS_SRC, ['css-dev']);
    gulp.watch(options.PARTIALS_SRC, ['template-cache']);
});
