const express = require('express')

const routes = express.Router()

const emailController = require('./controllers/emailController')
const usuarioController = require('./controllers/usuarioController')

routes.get('/email', emailController.email)
routes.post('/email', emailController.emailSend)

routes.get('/cadastrar', usuarioController.cadastrar)
routes.post('/cadastrar', usuarioController.cadastrarSend)

module.exports = routes