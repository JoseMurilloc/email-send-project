const express = require('express')

const routes = express.Router()

const emailController = require('./controllers/emailController')

routes.get('/', emailController.email)

routes.post('/', emailController.emailSend)

module.exports = routes