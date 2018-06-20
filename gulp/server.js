'use strict';

// config
var config = require('./config.js');

// packages
var gulp = require('gulp');
var path = require('path');
var nodemon = require('gulp-nodemon');

// nodemon
gulp.task('server', function() {
    nodemon({
        script: path.join('server', 'server.js'),
        ext: 'js json',
        env: {
            'NODE_ENV': config.NODE_ENV,
        },
        watch: [
            path.join('server', '**', '*'),
            path.join('common', 'models'),
            path.join('common', 'mixins'),
        ],
    });
});
