/**
 * generator-lark - index.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('path', {type: String, required: true});
    var extname = path.extname(this.path);
    if (!extname || extname != '.js') {
      this.path = path.join(this.path, 'index.js');
    }
    this.path = path.join('models', 'dataServices', this.path);
  },
  initializing: function () {
    this.pkg = require('../package.json');
    this.log(yosay(
      'Welcome to ' + chalk.red('Lark.js') + ' generator!'
    ));
  },
  writing: function () {
    this.copy('data.js', this.path);
  }
});
