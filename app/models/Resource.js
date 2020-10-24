const db = require('../../config/dbconfig')

class ResourceModel {
  async all() {
    return await db('resource')
  }

  async insert(payload) {
    return await db('resource').insert(payload).returning('id')
  }
}

module.exports = new ResourceModel()
