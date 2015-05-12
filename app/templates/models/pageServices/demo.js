/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * You can access these methods by this.pageServices["<%= model_name %>"]
 * in controllers
 **/
var <%= var_name %> = module.exports = {};

//TODO: dev your own page service methods
<%= var_name%>.render = function * (next) {
  return (yield this.dataServices.demo.getData()) + '-pageService';
};

/**
 * More Usage :
 *
    module.exports = function(mvc){
      var <%= var_name %> = mvc.pageService.create("<%= model_name %>");
      //TODO: dev your own page service methods
      <%= var_name %>.render = function * () {
        return (yield this.dataServices.demo.getData()) + '-pageService';
      };
    };

 **/
