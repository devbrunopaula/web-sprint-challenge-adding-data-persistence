const express = require('express')
const router = express.Router()

const welcome = require('../app/controllers/WelcomeController')
const projects = require('../app/controllers/ProjectController')
const tasks = require('../app/controllers/TaskController')
const resource = require('../app/controllers/ResourceController')

router.route('/').get(welcome.index)
router.route('/projects').get(projects.index).post(projects.create)
router.route('/projects/:id/tasks').get(projects.list)
router.route('/tasks').get(tasks.index).post(tasks.create)
router.route('/resource').get(resource.index).post(resource.create)

module.exports = router
