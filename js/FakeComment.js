const FakeBase = require('./FakeBase')
const { faker } = require('@faker-js/faker')

class FakeComment extends FakeBase {
  constructor(id) {
    super()

    this.post_id = id
    this.content = this.getThreeSmiles()
  }

  getThreeSmiles() {
    let result = ''
    for (let i = 0; i < 3; i++) {
      result += faker.internet.emoji({ types: ['smiley', 'symbol', 'nature'] })
    }

    return result
  }
}

module.exports = FakeComment
