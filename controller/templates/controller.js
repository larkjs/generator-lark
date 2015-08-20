/**
 * Created by Lark on <%= new Date() %>
 */
'use strict';

/**
 * Respond to route : METHOD / on this server
 * Use this.pageServices to access model layers
 **/

module.exports = function (router) {
    //TODO : dev your own controllers
    router.get('/', function *(next) {
        this.body = this.pageServices['demo'].execute(this);
        yield next;
    });
};


/**
 * More Usage:
 * You can define some complicated routes like this:

    module.exports = function * (next) {
        this.body = yield this.pageServices.demo.execute(this);
        yield next;
    }


 **/
