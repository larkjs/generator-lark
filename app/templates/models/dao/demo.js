/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * You can access these methods by this.daoServices["<%= model_name %>"]
 * in data services
 **/
var <%= var_name %> = module.exports = {};

//TODO: dev your own dao service methods
<%= var_name%>.getData = function * () {
  return new Promise(function (resolve, reject) {
    process.nextTick(function () {
      resolve('dao');
      /**
       * Or reject by :
         reject(new Error("Request Rejected!"));
       **/
    });
  });
};

/**
 * More usage :
 *
    module.exports = function(mvc){
      var <%= var_name %> = mvc.dao.create("<%= model_name %>");
      //TODO: dev your own dao service methods
      <%= var_name %>.getData = function * () {
        return new Promise(function (resolve, reject) {
          process.nextTick(function () {
            resolve('dao');
          });
        });
      }
    };

 **/
