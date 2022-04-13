const express = require('express')
const sql = require('./config/connection')
const routes = express.Router()

const UsuariosController = require('./controllers/UsuariosController')
const usuariosController = new UsuariosController()

routes.get('/usuarios', usuariosController.findAll)

routes.get('/usuarios/:id', usuariosController.findById)

routes.post('/usuarios', usuariosController.create)

routes.put('/usuarios', usuariosController.update)

routes.delete('/usuarios/:id', usuariosController.delete)

module.exports = routes