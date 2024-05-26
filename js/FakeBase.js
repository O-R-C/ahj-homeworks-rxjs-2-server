const { v4: uuidv4 } = require('uuid')
const { faker } = require('@faker-js/faker')

class FakeBase {
  constructor() {
    this.fullName = this.#createFullName()

    this.id = uuidv4()
    this.author_id = uuidv4()
    this.author = this.#createFullName()
    this.title = faker.lorem.sentence()
    this.avatar = faker.image.avatar()
    this.created = Date.now()
  }

  #createFullName() {
    const gender = this.#getGender()
    return `${faker.person.firstName(gender)} ${faker.person.lastName(gender)}`
  }

  #getGender() {
    return faker.helpers.arrayElement(['male', 'female'])
  }
}

module.exports = FakeBase
