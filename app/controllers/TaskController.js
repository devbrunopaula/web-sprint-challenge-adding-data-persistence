const Task = require('../models/Task')

class TaskController {
  async index({res}) {
    try {
      const task = await Task.all()
      res.status(200).json(task)
    } catch (error) {
      console.log(error)
    }
  }

  async create(req, res) {
    const {description, notes, project_id} = req.body
    const newTaskObj = {
      description,
      notes,
      project_id,
    }

    try {
      const newTask = await Task.insert(newTaskObj)
      res.status(201).json(newTask)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new TaskController()
