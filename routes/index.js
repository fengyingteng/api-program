const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


const basename = path.basename(module.filename)
const router = new Router()


fs
  .readdirSync(__dirname)
  .filter((file) => {
      return file !== basename
  })
  .forEach((file) => {
      let route = require(path.resolve(__dirname, file))
      router.use(route.routes()).use(route.allowedMethods())
  })


module.exports = router;

