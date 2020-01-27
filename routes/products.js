const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/products')
router.use('/:id/reviews', require('./reviews'))
router.get('/', Ctrl.productCtrl)

router.post('/reviews', Ctrl.productReviewCtrl)

module.exports = router.routes()
