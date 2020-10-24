const Reource = require('../models/Resource')

class ResourceController {
  async index({res}) {
    try {
      const resource = await Reource.all()
      res.status(200).json(resource)
    } catch (error) {
      console.log(error)
    }
  }

  async create(req, res) {
    const {name, description} = req.body
    const newResourceObj = {
      name,
      description,
    }

    try {
      const newResource = await Reource.insert(newResourceObj)
      res.status(201).json(newResource)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ResourceController()
