const reviews = require('../data/reviews.json')

function reviewsCtrl (ctx) {
  
  let review = reviews.filter(review =>{
    return review.pId === parseInt(ctx.params.id)
  })
  ctx.ok({ review })
}
function saveReviews (ctx) {

  let view = ctx.request.body;
  view["id"] = reviews.length + 1;
  view["pId"] = parseInt(ctx.params.id);
  reviews.push(view);
  let review = reviews.filter(review =>{
    return review.pId === parseInt(ctx.params.id);
  })
  ctx.ok({ review })
}



module.exports = {
  reviewsCtrl,saveReviews
}
