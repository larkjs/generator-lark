/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * You can access these methods by this.dataServices["<%= model_name %>"]
 * in page services
 * You can access dao modules by this.daoServices[$NAME]
 **/
module.exports = function(mvc){
    var <%= var_name %> = mvc.dataService.create("<%= model_name %>");
    //TODO: dev your own data service methods
    <%= var_name %>.getData = function * (ctx) {
        return (yield this.daoServices.demo.getData(ctx)) + '-dataService'
    }
};

/**
 * More usage :
 *

    var <%= var_name %> = module.exports = {};

    <%= var_name%>.getData = function * (ctx) {
        return (yield this.daoServices.demo.getData(ctx)) + '-dataService';
    };

 **/
