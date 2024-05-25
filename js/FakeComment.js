const FakeBase = require('./FakeBase')
const { faker } = require('@faker-js/faker')

class FakeComment extends FakeBase {
  constructor() {
    super()

    this.content = faker.lorem.sentence({ min: 2, max: 5 })
  }
}

module.exports = FakeComment
