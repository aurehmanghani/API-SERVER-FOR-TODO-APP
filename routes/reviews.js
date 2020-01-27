const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/reviews')
router.get('/', Ctrl.reviewsCtrl)
router.post('/', Ctrl.saveReviews)

module.exports = router.routes()
