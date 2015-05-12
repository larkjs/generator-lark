/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * You can access these methods by this.dataServices["<%= model_name %>"]
 * in page services
 **/
var <%= var_name %> = module.exports = {};

//TODO: dev your own data service methods
<%= var_name%>.getData = function * () {
  return (yield this.daoServices.demo.getData()) + '-dataService';
};

/**
 * More usage :
 *
    module.exports = function(mvc){
      var <%= var_name %> = mvc.dataService.create("<%= model_name %>");
      //TODO: dev your own data service methods
      <%= var_name %>.getData = function * () {
        return (yield this.daoServices.demo.getData()) + '-dataService'
      }
    };

 **/
