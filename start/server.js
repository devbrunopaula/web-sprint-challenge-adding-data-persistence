const express = require('express')
const app = express()
const morgan = require('morgan')
const routes = require('../config/routes')

app.use(morgan('dev'))
app.use('/', routes)

module.exports = app
