'use strict';


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint : {
      all : [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options : {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean : {
      tests : ['tmp']
    },

    // Configuration to be run (and then tested).
    yocto_generator_apidoc : {

      apidoc : {
        options : {
          modelsFolder : '/example/models/',
          dest : '/example/apidoc.js'
        }
      }
    },

    yoctohint : {
      options : {
        // If you wan to override jshint rules ...
        // prefer defined rules. But if by default you are in node mode.
        // If you want to hint in classic mode, set node property to null
        jshint : {}
      },
      // Set all your file here
      all : [ 'src/generator.js' ]
    }

  });

  // load task
  grunt.loadNpmTasks('yoctohint');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-apidoc');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('buildExample', ['clean', 'yocto_generator_apidoc', 'jshint']);

  grunt.registerTask('yhint', ['yoctohint']);

};
