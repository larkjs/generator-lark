/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * You can access these methods by this.pageServices["<%= model_name %>"]
 * in controllers
 * You can access data modules by this.dataServices[$NAME]
 **/
module.exports = function(mvc){
    var <%= var_name %> = mvc.pageService.create("<%= model_name %>");
    //TODO: dev your own page service methods
    <%= var_name %>.execute = function * (ctx) {
        return (yield this.dataServices.demo.getData(ctx)) + '-pageService';
    };
};

/**
 * More Usage :
 *

    var <%= var_name %> = module.exports = {};

    <%= var_name%>.execute = function * (ctx) {
      return (yield this.dataServices.demo.getData(ctx)) + '-pageService';
    };

 **/
