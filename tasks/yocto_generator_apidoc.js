'use strict';

var _         = require('lodash');
var generator = require('../src/generator.js');
var path      = require('path');

/**
* Grunt task for Generator of comments for apidocjs (www.apidocjs.com)
*
* This task load generator.js and execute it
*
*
* @date : 03/06/2015
* @author : BALARD, Cédric cedric@yocto.re
* @copyright : YOCTO SAS, All rights reversed <http://www.yocto.re>
* @module yocto-generator-apidoc
*/
module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('yocto_generator_apidoc', 'Plugin for generate comments file for apidoc',
  function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      modelsFolder  :  '',
      apidocsFolder : '',
      dest          : ''
    });

    // Test if parms is ok
    if (_.isEmpty(options.modelsFolder) || _.isEmpty(options.apidocsFolder) ||
    _.isEmpty(options.dest)) {

      grunt.log.error('You have an error in your grunt file configuration ' +
      'for grunt-yocto-generator-apidoc');
      return false;
    }

    // Destination file
    var destFile = path.normalize(process.cwd() + '/' + options.dest);

    // folder where all models json are
    var models = path.normalize(process.cwd() + '/' + options.modelsFolder + '/*.json');

    // folder where all apidoc declaration are
    var docs = path.normalize(process.cwd() + '/' + options.apidocsFolder);

    // Declare the module in async mode
    var done = this.async();

    grunt.log.writeln('Source models are in  : ' + models);
    grunt.log.writeln('Source apidoc are in  : ' + docs);
    grunt.log.writeln('Destination file is : ' + destFile);
    grunt.log.writeln('');

    // start a procress
    generator.startProcess(models, docs, destFile, done, grunt);

    return true;
  });
};
