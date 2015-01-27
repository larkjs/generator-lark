# Lark.js generator 


> Yeoman generator for Lark.js - lets you quickly set up a project with sensible defaults and best practices.



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

* [lark](#app) (aka [angular:app](#app))
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

