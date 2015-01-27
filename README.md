# Lark.js generator 


> Yeoman generator for Lark.js - lets you quickly set up a project with sensible defaults and best practices.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![NPM downloads][downloads-image]][npm-url]
[![Node.js dependencies][david-image]][david-url]

## Usage

Install `generator-lark`:
```
npm install -g generator-lark
```

You can Skip this by pass an app name . Make a new directory, and `cd` into it.:
```
mkdir my-new-project && cd $_
```

Run `yo lark`, optionally passing an app name:
```
yo lark [app-name]
```

## Generators

Available generators:

* [lark](#app) (aka [lark:app](#app))
* [lark:controller](#controller)
* [lark:data](#dataService)
* [lark:page](#pageService)
* [lark:dao](#dao)

**Note: Generators are to be run from the root directory of your app.**

### App
Sets up a new Lark.js app, generating all the boilerplate you need to get started. 

Example:
```bash
yo lark
```

### controller
Generate controller file

Example:
```bash
yo lark:controller user  # create controllers/user/index.js
yo lark:controller user/  # create controllers/user/index.js
yo lark:controller user/create.js  # create controllers/user/create.js
```

### dataService
Generate dataService file

Example:
```bash
yo lark:data user.js  # create models/dataService/user.js
```

### pageService
Generate pageService file

Example:
```bash
yo lark:page user.js  # create models/pageService/user.js
```

### dao
Generate dao file

Example:
```bash
yo lark:dao user.js  # create models/dao/user.js
```

[npm-image]: https://img.shields.io/npm/v/generator-lark.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-lark
[travis-image]: https://img.shields.io/travis/larkjs/generator-lark/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/larkjs/generator-lark
[downloads-image]: https://img.shields.io/npm/dm/generator-lark.svg?style=flat-square
[david-image]: https://img.shields.io/david/larkjs/generator-lark.svg?style=flat-square
[david-url]: https://david-dm.org/larkjs/generator-lark
