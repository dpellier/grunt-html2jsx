/*
 * grunt-html2jsx
 * https://github.com/dpellier/grunt-html2jsx
 *
 * Copyright (c) 2015 Damien Pellier
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var HTMLtoJSX = require('htmltojsx');
    var path = require('path');

    var normalizePath = function(p) {
        if (path.sep !== '/') {
            return p.replace(/\\/g, '/');
        }
        return p;
    };

    var outputClassName = function(filepath) {
        return filepath.replace(/.*\/([a-z0-9]*).html$/gi, '$1') + 'Html';
    };

    var convert2jsx = function(filepath) {
        var converter = new HTMLtoJSX({
            createClass: true,
            outputClassName: outputClassName(filepath)
        });

        return converter.convert(grunt.file.read(filepath));
    };

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html2jsx', 'Convert HTML files to JSX', function() {
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Convert file
                return convert2jsx(normalizePath(filepath));
            }).join(grunt.util.normalizelf('\n'));

            // Write the destination file.
            grunt.file.write(f.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
