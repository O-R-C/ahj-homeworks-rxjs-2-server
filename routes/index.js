const combine = require('koa-combine-routers')

const index = require('./index/index')
const posts = require('./posts/index')

const router = combine([index, posts])
module.exports = router
