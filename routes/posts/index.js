const Router = require('@koa/router')
const router = new Router()
const posts = require('../../../db/posts')

router.get('/posts/latest', async (ctx) => {
  ctx.status = 200

  ctx.type = 'application/json'

  ctx.body = JSON.stringify({
    status: 'ok',
    timestamp: Date.now(),
    messages: JSON.stringify(posts.get().splice(-10)),
  })
})

module.exports = router
