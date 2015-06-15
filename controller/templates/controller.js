/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * Respond to GET / on this server
 * Use this.pageServices to access model layers
 **/
//TODO : dev your own controllers
module.exports = function * (next) {
    this.body = yield this.pageServices.demo.render(this);
    yield next;
}



/**
 * More Usage:
 * You can define some complicated routes like this:

   module.exports = function (router) {
     //TODO : dev your own controllers
     router.get('/', function *(next) {
       this.body = this.pageServices['demo'].render();
       yield next;
     });
     return router;
   };

 **/
