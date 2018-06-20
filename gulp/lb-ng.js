'use strict';

// packages
var gulp = require('gulp');
var exec = require('child_process').exec;
var path = require('path');
var del = require('del');
var runSequence = require('run-sequence');

var outputPath = path.join(__dirname, '..', 'client', 'app', 'lbservices');

// loopback services
gulp.task('lb-ng', function(callback) {
    return runSequence(
        'clean-sdk',
        'build-sdk',
        callback
    );
});

gulp.task('clean-sdk', function() {
    return del(outputPath);
});

gulp.task('build-sdk', function(callback) {
    var lbsdkPath = path.join(__dirname, '..', 'node_modules', '.bin', 'lb-sdk');
    var serverPath = path.join(__dirname, '..', 'server', 'server.js');
    var lbsdk = exec(`${lbsdkPath} ${serverPath} ${outputPath}`);

    lbsdk.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    lbsdk.stderr.on('data', function(data) {
        console.log(data.toString());
    });

    lbsdk.on('exit', function(code) {
        console.log('lbsdk process exited with code ' + code.toString());
    });

    callback();
});
