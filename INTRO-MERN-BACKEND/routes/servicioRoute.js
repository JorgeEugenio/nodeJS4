const express = require('express')
const servicioController = require('../controllers/servicioController')
const api = express.Router()

api.post('/servicio',servicioController.addServicio)
//api.get('/servicio',servicioController.addServicio)

module.exports = api