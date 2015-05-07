'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('lark:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      'index.js',
      'config/env/development.js',
      'config/env/production.js',
      'config/mvc.json',
      'config/travis.yml',
      'config/views.js',
      'controllers/index.js',
      'controllers/user/create.js',
      'controllers/user/list.js',
      'models/dao/demo.js',
      'models/dataServices/demo.js',
      'models/pageServices/demo.js',
      'benchmarks/run.sh'
    ]);
  });
});

describe('lark:controller path:user', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'controllers/user/index.js'
    ]);
  });
});

describe('lark:controller path:user/', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'controllers/user/index.js'
    ]);
  });
});

describe('lark:controller path:user.js', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../controller'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user.js')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'controllers/user.js'
    ]);
  });
});
describe('lark:dao path:user.js', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../dao'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user.js')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'models/dao/user.js'
    ]);
  });
});
describe('lark:data path:user.js', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../data'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user.js')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'models/dataServices/user.js'
    ]);
  });
});
describe('lark:page path:user.js', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../page'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withArguments('user.js')
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'models/pageServices/user.js'
    ]);
  });
});
describe('lark:benchmark', function(){
  before(function (done) {
    helpers.run(path.join(__dirname, '../benchmark'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });
  it('creates files', function () {
    assert.file([
      'benchmarks/run.sh'
    ]);
  });
});
