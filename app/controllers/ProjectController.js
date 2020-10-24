class ProjectController {
  async index({res}) {
    try {
      res.status(200).json({msg: 'Welcome to my API'})
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ProjectController()
