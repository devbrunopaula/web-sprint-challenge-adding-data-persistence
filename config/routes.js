const express = require('express')
const router = express.Router()

const welcome = require('../app/controllers/WelcomeController')
const projects = require('../app/controllers/ProjectController')
const tasks = require('../app/controllers/TaskController')

router.route('/').get(welcome.index)
router.route('/projects').get(projects.index)
router.route('/tasks').get(tasks.index)

module.exports = router
