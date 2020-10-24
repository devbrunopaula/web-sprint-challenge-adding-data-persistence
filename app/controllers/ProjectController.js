const Project = require('../models/Project')

class ProjectController {
  async index({res}) {
    try {
      const projects = await Project.all()
      res.status(200).json(projects)
    } catch (error) {
      console.log(error)
    }
  }

  async create(req, res) {
    const {name, description} = req.body
    const newProjectObj = {
      name,
      description,
    }

    try {
      const newProject = await Project.insert(newProjectObj)
      res.status(201).json(newProject)
    } catch (error) {
      console.log(error)
    }
  }

  async list(req, res) {
    const {id} = req.params

    try {
      const getProjectTasks = await Project.listOfTasks(id)
      res.status(200).json(getProjectTasks)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ProjectController()
