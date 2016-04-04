'use strict';


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    yocto_generator_apidoc : {

      apidoc : {
        options : {
          modelsFolder  : '/example/models/',
          apidocsFolder : '/example/apidoc/',
          dest          : '/example/apidoc.js'
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
      all : [ 'src/**.js', 'tasks/**.js' ]
    },

    // apidoc generator
    apidoc: {
      myapp: {
        src: "/example/",
        dest: "/exemple/apidoc-the-site/"
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-apidoc');
  grunt.loadNpmTasks('yoctohint');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('buildExample', [ 'yocto_generator_apidoc', 'apidoc' ]);
  grunt.registerTask('yhint', ['yoctohint']);
  grunt.registerTask('test', [ 'yocto_generator_apidoc' ]);
  grunt.registerTask('g-apidoc', ['apidoc:myapp']);
};
