const Product = require('../models/product')

let addProduct = async (req,res) => {
    try {
        const {
            name,
            size,
            description,
            unitaryPrice
        } = req.body

        const product =  Product({
            name,
            size,
            description,
            unitaryPrice
        })

        const productStored = await product.save()
        res.status(201).send(product)    
    } catch (error) {
        res.status(500).send({ message: e.message })
    }
    
}


module.exports = {
    addProduct
}