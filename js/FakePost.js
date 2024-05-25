const FakeBase = require('./FakeBase')
const { faker } = require('@faker-js/faker')

class FakePost extends FakeBase {
  constructor() {
    super()

    this.image = faker.image.urlLoremFlickr({ category: 'cats' })
  }
}

module.exports = FakePost
