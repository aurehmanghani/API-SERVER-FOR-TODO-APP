module.exports = (router) => {
  router.prefix('/v1')
  router.use('/products', require('./products'));
  router.use('/todos', require('./todos'));
}
