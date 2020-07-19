const Servicio =require('../models/Servicio')

async function addServicio (req,res){
    try {
        const {
            service,
            costo,
            status
        } = req.body

        const servicio = Servicio({
            service,
            costo,
            status
        })
        await servicio.save()
        res.status(201).send(servicio)
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

module.exports = {
    addServicio
}