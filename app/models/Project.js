const db = require('../../config/dbconfig')

class ProjectModel {
  async all() {
    return await db('project')
  }

  async insert(payload) {
    return await db('project').insert(payload).returning('id')
  }

  async listOfTasks(id) {
    return await db('task as t')
      .join('project as p', 'p.id', 't.project_id')
      .where('p.id', id)
      .select('p.*', 't.description as task_description', 't.notes')
  }
}

module.exports = new ProjectModel()
