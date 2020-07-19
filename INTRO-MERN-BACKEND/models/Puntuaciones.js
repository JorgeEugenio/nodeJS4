const mongoose = require('mongoose')
const Schema = mongoose.Schema

const puntuacionesSchema = Schema({

    idEstudiante: Number,
    puntuaciones: {
        preguntas : Number,
        ejercicios : Number,
        tareas : Number,
        examen : Number
    }

})

module.exports = mongoose.model('Puntuaciones',puntuacionesSchema)