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

    clean: ['out/'],
    stylus: {
      site: {
        files: {
          'out/styles/styles.css': 'src/styles/styles.stylus'
        }
      }
    },
		haggerston: {

		}

	});

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-haggerston');

	grunt.registerTask('build', ['clean', 'stylus', 'haggerston']);

	grunt.registerTask('default', ['build']);

};
