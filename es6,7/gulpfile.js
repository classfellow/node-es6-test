// gulpfile.js
// Load plugins
"use strict";

var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('es7/*.js')
    .pipe(babel({
     "presets": [
       "stage-3"
    ],
    "plugins": []
  }))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['babel']);
