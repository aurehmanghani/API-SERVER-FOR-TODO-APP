const Router = require('koa-router');
const router = new Router();
const Ctrl = require('../controllers/todos');

router.get('/', Ctrl.todosCtrl);

router.post('/', Ctrl.postTodosCtrl);

router.delete('/', Ctrl.deleteTodosCtrl);

router.put('/', Ctrl.putTodosCtrl);

module.exports = router.routes();