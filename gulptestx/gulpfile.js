var gulp = require('gulp');

// inclde plugins
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');

var SRC = './js/*.js';
var DEST = 'dist';

gulp.task('compress-image', function () {
    return gulp.src('./pre-images/*')
               .pipe(imagemin({
                   progressive: true
               }))
               .pipe(gulp.dest('images'));
});

gulp.task('changed', function () {
    return gulp.src(SRC)
               .pipe(plumber())
               .pipe(changed(DEST))     // check what's been changed
               .pipe(gulp.dest(DEST));  // do the destinaiton where we want it to be
});

gulp.task('jshint', function () {
    gulp.src('./js/main.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));  // use default reporter
});

gulp.task('minify-css', function () {
    return gulp.src('./pre-css/style.css')
               .pipe(minifyCSS({
                  keepSpecialComments: 1,
                  keepBreaks: true
               }))
               .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch(SRC, ['changed']);
});

gulp.task('default', ['jshint', 'watch'], function () {});
