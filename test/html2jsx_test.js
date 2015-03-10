'use strict';

var grunt = require('grunt');

exports.html2jsx = {
    setUp: function (done) {
        done();
    },
    defaultOptions: function(test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/defaultOptions.jsx');
        var expected = grunt.file.read('test/expected/defaultOptions.jsx');
        test.equal(actual, expected, 'should convert html content to jsx equivalent');

        test.done();
    }
};
