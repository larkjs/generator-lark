'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var exec = require('child_process').execSync;

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appname', {type: String, required: false});
    this.cwd = path.basename(process.cwd());
    this.appname = this.appname || this.cwd;
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
    this.appPath = path.join(this.destinationRoot(), this.appname);
    this.env.larkPkg = this.env.larkPkg || {};
    this.larkVersion = this.env.larkPkg.version || '0.10.10';
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
      this.template('package.json', 'package.json', {appname: this.appname, larkVersion: this.larkVersion});
      this.copy('index.js');
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
      return install.call(this);
  }
  /*
  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
  */
});

/**
 * Lark is in large size that install lark will cost a lot of time
 * If this module is called by lark, which means user already installed lark
 * copy that lark instead of install it by npm
 **/
function install () {
    if (this.options['skip-install']) {
        return;
    }
    //if version of lark in app is the same as the lark called this generator
    if (this.larkVersion === this.env.larkPkg.version) {
        copyLark.call(this) && updateLark.call(this);
    }
    installDenpendencies.call(this);
}

function copyLark (callback) {
    console.log('   ' + chalk.yellow('copy') + '   ' + chalk.red('Lark.js') + ' from local disk ...');
    var me = this;
    process.chdir(this.appPath);
    this.mkdir('node_modules');
    try {
        var from = path.dirname(require.resolve('lark'));
    }
    catch (e) {
        console.log('   ' + chalk.red('copy failed') + ' can not find module "lark", ' + chalk.yellow('copy') + ' abandoned ...');
    }
    var to = 'node_modules/lark';
    var cmd = 'cp -r ' + from + ' ' + to;
    try {
        exec(cmd);
    }
    catch (e) {
        console.log('   ' + chalk.red('copy failed') + ' error when executing ' + cmd + '; error message is ' + e.message);
    }
    return true;
}

function updateLark (callback) {
    console.log('   ' + chalk.yellow('update') + ' ' + chalk.red('Lark.js') + ' by npm ...\n\n\n');
    var larkPath = path.join(this.appPath, 'node_modules/lark');
    console.log("update start");
    var cmd = 'cd ' + larkPath + ' && npm install --production';
    try {
        exec(cmd);
    }
    catch (e) {
        console.log('   ' + chalk.red('update failed') + ' error when executing ' + cmd + '; error message is ' + e.message);
    }
    console.log("update end");
    return true;
}

function installDenpendencies () {
    process.chdir(this.appPath);
    this.installDependencies({
        skipInstall: this.options['skip-install'],
        bower: false
    });
}
