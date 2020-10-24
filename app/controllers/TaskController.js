class TaskController {
  async index({res}) {
    try {
      res.status(200).json({msg: 'Task API Endpoint'})
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new TaskController()
