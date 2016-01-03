var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('my_jshint', function () {
    gulp.src('./js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('default', [ 'my_jshint' ], function () {
    // your default tasking here
});