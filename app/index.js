'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appname', {type: String, required: false});
    this.cwd = path.basename(process.cwd());
    this.appname = this.appname || this.cwd;
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
    this.env.larkPkg = this.env.larkPkg || {};
    this.var_name = this.model_name = 'demo';
  },
  initializing: function () {
    this.pkg = require('../package.json');
    this.log(yosay(
      'Welcome to ' + chalk.red('Lark.js') + ' generator!'
    ));
  },

  prompting: function () {

  },

  writing: {
    mkdir: function () {
      if (this.appname != this.cwd) {
        this.mkdir(this.appname);
        process.chdir(this.appname);
      }
    },
    file: function () {
      this.template('package.json', 'package.json', {appname: this.appname, larkVersion: this.env.larkPkg.version || '0.8.0'});
      this.copy('index.js');
      this.copy('Gruntfile.js');
    },
    bin: function () {
      this.directory('bin', 'bin');
    },
    config: function () {
      this.directory('config', 'config');
    },
    controllers: function () {
      this.directory('controllers', 'controllers');
    },
    models: function () {
      this.directory('models', 'models');
    },
    statics: function () {
      this.directory('statics', 'statics');
    },
    benchmarks: function (){
      this.directory('benchmarks', 'benchmarks');
    },
    log: function () {
      this.directory('logs', 'logs');
    },
    views: function () {
      this.directory('views', 'views');
    },
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
