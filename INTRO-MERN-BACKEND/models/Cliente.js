const mongoose = require('mongoose')
const { appConfig } = require('../config')
const Schema = mongoose.Schema

const clienteSchema = Schema({
    nombre: String,
    apellido: String,
    dni: String,
    celular: String,
    status: String
},{
    timestamps: true
})

module.exports = mongoose.model('Cliente',clienteSchema)


