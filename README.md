# grunt-yocto-generator-apidoc

> Plugin for generate comments file for apidoc

This module load all json file in a specific folder, and translate this data in a comments file that will be imported by apidoc for generate doc

For the structure of json file please refer to the yocto-api node module at :
 - git@lab.yocto.digital:yocto-node-modules/yocto-api.git



## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-yocto-generator-apidoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-yocto-generator-apidoc');
```



## The "yocto_generator_apidoc" task

### Overview
In your project's Gruntfile, add a section named `yocto_generator_apidoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  yocto_generator_apidoc: {
    apidoc: {
      options: {
        modelsFolder : '/example/models/',
        dest : '/example/apidoc.js'
      }
    }
  },
});
```

### Options

#### options.modelsFolder
Type: `String`

The directory path where all you models are.

#### options.dest
Type: `String`

The file of you comment file which will be create

### Examples

```js
grunt.initConfig({
  yocto_generator_apidoc: {
    apidoc: {
      options: {
        modelsFolder : '/example/models/',
        dest : '/example/apidoc.js'
      }
    }
  },
});
