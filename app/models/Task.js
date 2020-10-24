const db = require('../../config/dbconfig')

class TaskModel {
  async all() {
    return await db('task')
  }

  async insert(payload) {
    return await db('task').insert(payload).returning('id')
  }
}

module.exports = new TaskModel()
