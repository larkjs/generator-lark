/**
 * Created by Lark on <%= new Date() %>
 * This is for demo, feel free to remove this file
 */

/**
 * Respond to METHOD /list on this server
 * Use this.pageServices to access model layers
 **/
module.exports = function (router) {
  router.get('/', function *(next) {
    yield this.render('user.ejs', {user: {name: 'lark'}});
    yield next;
  });
  return router;
};
