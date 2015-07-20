/**
 * Created by Lark on <%= new Date() %>
 */


/**
 * More Usage:
 * You can define some complicated routes like this:
**/
   module.exports = function (router) {
     //TODO : dev your own controllers
     router.get('/', function *(next) {
       this.body = this.pageServices['demo'].render(this);
       yield next;
     });
     return router;
   };


