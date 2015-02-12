/**
 * lark-seed - app.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';


var lark = require('lark');
var app = lark();

app.run(3000, function (port) {
  console.log('running on', port);
});
