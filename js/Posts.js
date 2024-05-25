const ArrayStorage = require('./ArrayStorage')
const FakePost = require('./FakePost')

class Posts extends ArrayStorage {
  #timer = null

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
    this.length > 10 && this.clear()
    this.#addPost()
  }

  #addPost() {
    this.push(new FakePost())
  }
}

module.exports = Posts
