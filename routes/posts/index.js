const Router = require('@koa/router')
const router = new Router()
const posts = require('../../db/posts')

router.get('/posts/latest', async (ctx) => {
  ctx.status = 200

  ctx.type = 'application/json'

  ctx.body = JSON.stringify({
    status: 'ok',
    timestamp: Date.now(),
    posts: JSON.stringify(posts.latest),
  })
})

router.get('/posts/:id/comments/latest', async (ctx) => {
  ctx.status = 200
  ctx.type = 'application/json'
  ctx.body = JSON.stringify({
    status: 'ok',
    timestamp: Date.now(),
    comments: JSON.stringify(posts.getLatestComments(ctx.params.id)),
  })
})

module.exports = router
