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

    var components = {};

    var normalizePath = function(p) {
        if (path.sep !== '/') {
            return p.replace(/\\/g, '/');
        }
        return p;
    };

    var outputClassName = function(filepath) {
        var name = filepath.replace(/.*\/([a-z0-9]*).html$/gi, '$1');

        var compoName = name.replace(/\b[a-z]/, function(letter) {
            return letter.toUpperCase();
        }) + 'Html';

        components[name] = compoName;

        return compoName;
    };

    var convert2jsx = function(filepath) {
        var converter = new HTMLtoJSX({
            createClass: true,
            outputClassName: outputClassName(filepath)
        });

        return converter.convert(grunt.file.read(filepath));
    };

    var addModuleExports = function() {
        return 'module.exports = ' + JSON.stringify(components).replace(/"/g, '') + ';';
    };

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html2jsx', 'Convert HTML files to JSX', function() {
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var src = 'var React = require(\'react\');\n';

            // Concat specified files.
            src += f.src.filter(function(filepath) {
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

            src += '\n' + addModuleExports();

            // Write the destination file.
            grunt.file.write(f.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });
};
