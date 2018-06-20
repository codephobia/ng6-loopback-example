'use strict';

// envkey loads keys to the process.env
require('envkey');

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');

var app = module.exports = loopback();

// determine if the server was run via `$ node server.js`
var isMain = (require.main === module);
app.set('isMain', isMain);

app.start = function() {
    // start the web server
    return app.listen(function() {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        // eslint-disable-next-line no-console
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            // eslint-disable-next-line no-console
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// loopback options
var options = {
    'appRootDir': path.join(__dirname, 'configs'),
    'bootDirs': [path.join(__dirname, 'boot')],
    'modelSources': [path.join(__dirname, '..', 'common', 'models')],
    'mixinSources': [path.join(__dirname, '..', 'common', 'mixins')]
};

// bootstrap options
boot(app, options, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (isMain)
        app.start();
});
