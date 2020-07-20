const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productsRoutes = require('./routes/product')
const servicioRoute = require('./routes/servicioRoute')
const clienteRoute = require('./routes/clienteRoute')
const puntuacionesRoute = require('./routes/puntuaciones2Route')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/v1',productsRoutes)
app.use('/v1',servicioRoute)
app.use('/v1',clienteRoute)
app.use('/v1',puntuacionesRoute)
app.use('/public', express.static(`${__dirname}/storage/imgs`))

module.exports = app