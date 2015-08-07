/**
 * Created by Lark on <%= new Date() %>
 * This is for demo, feel free to remove this file
 */

/**
 * Route prefix is /create
 * Use this.pageServices to access model layers
 **/
module.exports = function (router) {
    router.get('/', function *(next) {
        yield this.render('user/');
        yield next;
    });
};
