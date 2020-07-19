const express = require('express')
const puntuaciones2Controller = require('../controllers/puntuaciones2Controller')
const api = express.Router()

//api.get('/puntuaciones', puntuaciones2Controller.addPuntuaciones)
//api.get('/puntuaciones', puntuaciones2Controller.getPuntuaciones)
api.get('/puntuaciones', puntuaciones2Controller.generarIndice)

module.exports = api