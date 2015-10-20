'use strict';

var _                 = require('lodash');
var glob              = require('glob');
var fs                = require('fs');
var ejs               = require('ejs');
var LineByLineReader  = require('line-by-line');
var path              = require('path');

// TODO : ajouter la possibilité de se baser sur un fichier "route.json" pour récupérer la route d'un modele afin de ne pas dupliquer l'info

/**
* Generator of comments for apidocjs (www.apidocjs.com)
*
* This generator will generate a comments file based on an EJS template and lot of model (define in json)
*
* The comments file once generated will be execute in a apidocjs process for generate an Api Web Documentation
*
* Apidocjs will provide also an interface for testing all REST request
*
*
* For more details on these dependencies read links below :
* - LodAsh : https://lodash.com/
* - yocto-logger : git+ssh://lab.yocto.digital:yocto-node-modules/yocto-utils.git
* - glob : https://www.npmjs.com/package/glob
* - fs : https://nodejs.org/api/fs.html
* - path : https://nodejs.org/api/path.html
* - ejs : https://www.npmjs.com/package/ejs
* - lineByLineReader : https://www.npmjs.com/package/line-by-line
*
*
* @date : 26/05/2015
* @author : BALARD, Cédric cedric@yocto.re
* @copyright : YOCTO SAS, All rights reversed <http://www.yocto.re>
* @class
*/

function Generator () {

  /**
  * Will Contains the template once loaded¿
  *
  * @type {String}
  *
  */
  this.template = '\n\n/**\n';

  /**
   * Grunt instance
   *
   * @type {Object}
   */
  this.grunt    = {};
}

Generator.prototype.startProcess = function (src, docs, destFile, done, grunt) {

  // Save grunt instance
  this.grunt = grunt;

  // Instantiate lineReader for Load the template from file
  var lineReader  = new LineByLineReader(__dirname + '/template/methods');

  // Save context
  var context = this;

  // Delete the commentFile if exist
  if (fs.existsSync(destFile)) {

    fs.unlinkSync(destFile);
  } else {

    // Try to Create folder
    try {
      fs.mkdirSync(path.dirname(destFile));
    } catch (e) {
    }
  }

  // Handle error
  lineReader.on('error', function (err) {

    // 'err' contains error object
    grunt.log.error([err]);
    return false;
  });

  // Read eachline of file the template
  lineReader.on('line', function (line) {

    // Test if line is not a commentaire
    if (!_.startsWith(_.trim(line), '#')) {
      context.template += '* ' + line + '\n';
    }
  });

  // All lines are read, file is closed now so we start process
  lineReader.on('end', function () {

    // End comments in template
    context.template += '*/';

    // Get each json file that are on the models repository
    _.each(_.words(glob.sync(src), /[^,,]+/g), function (folder) {

      _.each(_.words(glob.sync(folder + '/*.json'), /[^,,]+/g), function (file) {

        // Get model json file
        var jsonModel = JSON.parse(fs.readFileSync(file, 'utf-8'));

        // Get each json file that are on the models repository
        _.each(_.words(glob.sync(docs + path.basename(file, '.json') + '/*.json'), /[^,,]+/g),
        function (file) {

          var jsonApiDoc =  JSON.parse(fs.readFileSync(file, 'utf-8'));

          // Check if apidoc is define
          if (!_.isUndefined(jsonApiDoc.apidoc)) {

            // Create the doc
            context.createApiFile(context.template, jsonModel, jsonApiDoc, destFile);
          }
        });
      });
    });

    // Close the async task
    done();
  });
};

/**
* Create the whole comments based on templates and models
* Add this into the comments file
*
* @method createApiFile
* @param  {Object} theTemplate [description]
* @param  {Object} jsonModel   [description]
*/
Generator.prototype.createApiFile = function (theTemplate, jsonModel, jsonApiDoc, destFile) {

  var commentFile = '';

  // Retrieve each methods on jsonApiDoc for generate an bloc with all necessary values
  _.each(jsonApiDoc.apidoc.methods, function (method) {

    // clone model for multiple process
    var model = _.clone(jsonModel);

    // add method in apidoc to the model
    _.extend(model, method);

    model.contentSuccessString = '';

    // Specific traitement for construct an object for the response with all properties defined in model
    if (!_.isUndefined(model.apiSuccessExample) &&
    !_.isUndefined(model.apiSuccessExample.example) &&
    !_.isUndefined(model.apiSuccessExample.example.content)) {

      var properties = '    {\n';

      for (var key in model.model.properties) {

        var type = model.model.properties[key].type;

        if (typeof model.model.properties[key].type === 'object') {
          type = 'Object';

          if (model.model.properties[key].type.toString() === 'ObjectId') {
            type = 'ObjectId';
          }

          if (_.isArray(model.model.properties[key].type)) {
            type = '[ ' + type + ' ]';
          }
        }
        properties += '      ' + key + ' : ' + type + ',\n';
      }
      properties += '    }\n';

      var dataSuccess = '{\n';

      // Retrieve number properties of in content obj
      var lenghtContent = Object.keys(model.apiSuccessExample.example.content).length;
      var i             = 0;
      // read all docs
      for (var k in model.apiSuccessExample.example.content) {

        // increment
        i++;

        var value = _.isObject(model.apiSuccessExample.example.content[k]) ? 'Object' :
        model.apiSuccessExample.example.content[k];

        // if value is 'defaultObjectProperties' we put all properties defined in model into this
        if (model.apiSuccessExample.example.content[k].toString() === 'defaultObjectProperties') {

          if (_.isArray(model.apiSuccessExample.example.content[k])) {
            properties  = ' [\n' + properties + '  ]\n';
          }

          value = properties;
        }

        // define a line with specific rules
        dataSuccess += '  ' + k + ' : ' +
        (_.isString(model.apiSuccessExample.example.content[k]) ? '"' + value + '"' : value) +
        (i >= lenghtContent ? '' : ',\n');
      }

      // close object
      dataSuccess += '}';

      model.contentSuccessString = dataSuccess;
    }

    // Specific traitement for construct an object for the error with all properties defined in model
    if (!_.isUndefined(model.apiErrorExample) && !_.isUndefined(model.apiErrorExample.example) &&
    !_.isUndefined(model.apiErrorExample.example.content)) {

      var dataError = '{\n';

      // Retrieve number properties of in content obj
      var lenghtContentError = Object.keys(model.apiErrorExample.example.content).length;
      var j = 0;
      // read all docs
      for (var keys in model.apiErrorExample.example.content) {

        // increment
        j++;

        var valueError = _.isObject(model.apiErrorExample.example.content[keys]) ? 'Object' :
        model.apiErrorExample.example.content[keys];

        // define a line with specific rules
        dataError += '  ' + keys + ' : ' +
        (_.isString(model.apiErrorExample.example.content[keys]) ? '"' + valueError +
        '"' : valueError) + (j >= lenghtContentError ? '\n' : ',\n');
      }

      // close object
      dataError += '}';

      model.contentErrorString = dataError;
    }

    // Generate the apidoc file with EJS template
    commentFile += ejs.render(theTemplate, model);
  }, this);

  // Add the new comments method in file
  fs.appendFile(destFile, commentFile);
  this.grunt.log.ok('Model "' + jsonModel.model.name + '" was generate for apidocjs');
};

module.exports = new (Generator)();
