//Constantes
const express = require('express')
const routes = express.Router()

//Controllers
const usersController = require('../app/controllers/UserController')
const reportesController = require('../app/controllers/ReportsController')

//Routes

//Rutas users
    routes.route('/users').get(usersController.findAllUsers)

//Rutas reportes
    routes.route('/reportes').get(reportesController.findAllUsers)

//Exports
exports = module.exports = routes;