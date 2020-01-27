const products = require('../data/product.json')
function productCtrl (ctx) {
  ctx.ok({ products })
}


function productReviewCtrl(ctx) {
  ctx.ok({ products })
}
module.exports = {
  productCtrl, productReviewCtrl
}
