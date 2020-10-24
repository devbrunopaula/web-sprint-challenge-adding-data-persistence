class WelcomeController {
  async index({res}) {
    try {
      res.status(200).send('Welcome to my API')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new WelcomeController()
