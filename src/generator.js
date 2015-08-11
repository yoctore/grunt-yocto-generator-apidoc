'use strict';

var _                 = require('lodash');
var glob              = require('glob');
var fs                = require('fs');
var logger            = require('yocto-logger');
var ejs               = require('ejs');
var LineByLineReader  = require('line-by-line');

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
}

Generator.prototype.startProcess = function (src, destFile, done) {

  // Instantiate lineReader for Load the template from file
  var lineReader  = new LineByLineReader(__dirname + '/template/methods');

  // Save context
  var context = this;

  // Delete the commentFile if exist
  if (fs.existsSync(destFile)) {

    logger.info('delete file apidoc file');
    fs.unlinkSync(destFile);
  }

  // Handle error
  lineReader.on('error', function (err) {

    // 'err' contains error object
    console.log(err);
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
    _.each(_.words(glob.sync(src), /[^,,]+/g), function (file) {

      // Get json file
      var jsonModel = JSON.parse(fs.readFileSync(file, 'utf-8'));

      // Create the doc
      context.createApiFile(context.template, jsonModel, destFile);
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
Generator.prototype.createApiFile = function (theTemplate, jsonModel, destFile) {

  var commentFile = '';
  // Retrieve each methos on models files
  _.each(jsonModel.apidoc.methods, function (method) {

    logger.info('Model : ' + jsonModel.models.model.name +  '  method : ' + method.type);
    // Retrieve all necessary Object in json
    var model = _.clone(jsonModel.models);
    _.extend(model, method);

    // EJS Process
    commentFile += ejs.render(theTemplate, model);
  }, this);

  console.log('\n\n\n ------------------- \n\n');
  console.log(commentFile);
  // Add the new comments method in file
  fs.appendFile(destFile, commentFile);
};

module.exports = new (Generator)();
