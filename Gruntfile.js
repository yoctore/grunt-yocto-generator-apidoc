/*
 * grunt-yocto-generator-apidoc
 * n
 *
 * Copyright (c) 2015 Balard Cedric
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    yocto_generator_apidoc: {

      apidoc: {
        options: {
          modelsFolder : '/example/models/',
          dest : '/example/apidoc.js'
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'yocto_generator_apidoc', 'jshint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
