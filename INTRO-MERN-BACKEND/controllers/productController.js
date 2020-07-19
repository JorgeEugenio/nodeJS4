const Product = require('../models/product')

async function addProduct (req,res) {
    try {
        const {
            name,
            size,
            description,
            unitaryPrice
        } = req.body
        console.log(req.body);
        const product =  Product({
            name,
            size,
            description,
            unitaryPrice
        })

        if(req.file){
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()
        res.status(201).send(product)    
    } catch (error) {
        res.status(500).send({ message: e.message })
    }
}

async function getProducts (req,res) {
const products = await Product.find().lean().exec()
res.status(200).send({ products })
}


module.exports = {
    addProduct,
    getProducts
}