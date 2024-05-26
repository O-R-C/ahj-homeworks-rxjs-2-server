const ArrayStorage = require('./ArrayStorage')
const FakePost = require('./FakePost')
const FakeComment = require('./FakeComment')

class Posts extends ArrayStorage {
  #timer = null
  #comments = []

  constructor() {
    super()

    this.#init()
  }

  #init() {
    this.#timer && clearInterval(this.#timer)

    this.#generatePost()
    this.#timer = setInterval(this.#generatePost, 5000)
  }

  #generatePost = () => {
    this.length > 15 && this.clear()
    this.#addPost()
  }

  #addPost() {
    const post = new FakePost()
    this.push(post)

    this.#addComments(post.id)
  }

  #addComments(id) {
    const item = {
      id,
      comments: [],
    }

    const commentsCount = this.#getRandom()
    for (let i = 0; i < commentsCount; i++) {
      const comment = new FakeComment()
      item.comments.push(comment)
    }

    this.#comments.push(item)
  }

  #getRandom() {
    return Math.floor(Math.random() * 5)
  }

  clear() {
    super.clear()
    this.#comments = []
  }

  getLatestComments(id) {
    return this.#comments
      .filter((item) => item.id === id)
      .map((item) => item.comments)
      .slice(-3)
  }
}

module.exports = Posts
