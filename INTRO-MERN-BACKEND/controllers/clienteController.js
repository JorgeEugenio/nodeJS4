const Cliente = require('../models/Cliente')

async function addCliente (req,res) {
    try {
        const {
            nombre,
            apellido,
            dni,
            celular,
            status
        } = req.body
        console.log(req.body);
        const cliente = Cliente({
            nombre,
            apellido,
            dni,
            celular,
            status
        })
        await cliente.save()
        res.status(201).send(cliente)
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}


async function getClientes(req, res){
const clientes = await Cliente.find()
res.status(200).send(clientes)
}
module.exports = {
    addCliente,
    getClientes
}