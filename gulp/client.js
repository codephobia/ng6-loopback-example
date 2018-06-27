'use strict';

// packages
var gulp = require('gulp');
var exec = require('child_process').exec;

// default gulp
gulp.task('client', function(callback) {
    var client = exec('ng serve');

    client.stdout.on('data', function(data) {
        if (data)
            console.log(data.toString());
    });

    client.stderr.on('data', function(data) {
        if (data)
            console.log(data.toString());
    });

    client.on('exit', function(code) {
        if (code)
            console.log('client process exited with code ' + code.toString());
    });

    callback();
});
