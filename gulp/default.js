'use strict';

// packages
var gulp = require('gulp');
var runSequence = require('run-sequence');

// default gulp
gulp.task('default', function(callback) {
    return runSequence(
        'lb-ng',
        'server',
        'client',
        callback
    );
});
