const { db } = require("../../models/Puntuaciones");

db.collection.ensureIndex()
db.puntuaciones.createIndex({"puntuaciones.preguntas" : 1 })//asc