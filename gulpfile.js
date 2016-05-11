var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  ngAnnotate = require('gulp-ng-annotate');

gulp.task('compress', function() {
  gulp.src('src/angular-loading-interceptor.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/'))
    .pipe(uglify())
    .pipe(rename('angular-loading-interceptor.min.js'))
    .pipe(gulp.dest('./dist'))
});


gulp.task('default', ['compress']);
