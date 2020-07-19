const express = require('express')

const { addCliente, getClientes } = require('../controllers/clienteController')
const api = express.Router()


api.post('/cliente', addCliente)
api.get('/cliente', getClientes)
module.exports = api