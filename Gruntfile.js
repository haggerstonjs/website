/*
 * haggerston-example
 * https://github.com/vitch/haggerston-example
 *
 * Copyright (c) 2013 Kelvin Luck
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		haggerston: {
			files: '**/*.md'
		}

	});

	grunt.loadNpmTasks('grunt-haggerston');

	grunt.registerTask('build', ['haggerston']);

	grunt.registerTask('default', ['build']);

};
