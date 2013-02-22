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
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'assets/',
            src: ['**'],
            dest: 'out/'
          }
        ]
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-haggerston');

	grunt.registerTask('build', ['clean', 'copy', 'stylus', 'haggerston']);

	grunt.registerTask('default', ['build']);

};
