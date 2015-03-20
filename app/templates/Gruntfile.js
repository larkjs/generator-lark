"use strict";
var path = require('path')
var conf = require('./config/index.js')
var larkPath = require.resolve('lark')
var larkBinPath = path.resolve(path.dirname(larkPath), '../bin/lark')

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: {
                'src': '.'
            }
         },
        watch: {
            src: {
                files: ['**/*.js', 'statics/**/*.html', 'statics/**/*.css'],
                tasks: ['build', 'restart'],
                options: {
                    livereload: true
                }
            },
        },
        open: { // open the url through browser
            "examples": {
                path: 'http://localhost:' + conf.port + '/'
            }
        },
        exec: {
            'start': larkBinPath + ' start',
            'restart': larkBinPath + ' restart',
            'reload': larkBinPath + ' reload',
            'stop': larkBinPath + ' stop'
        },
        concurrent: {
            build: {
                tasks: ['jshint'],
                options: {
                    limit: 3,
                    logConcurrentOutput: true
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'})
    grunt.registerTask('build', ['concurrent:build'])
    grunt.registerTask('default', ['build'])
    grunt.registerTask('start', 'Start the app.', 'exec:start')
    grunt.registerTask('restart', 'Restart the app.', 'exec:restart')
    grunt.registerTask('reload', 'Reload the app.', 'exec:reload')
    grunt.registerTask('run', 'Start a developing environment', [
        'start', 'watch'
    ]);
};
/* vim: set expandtab ts=4 sw=4 sts=4 tw=100: */
