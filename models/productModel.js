const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    price: String,
    description: String,
    ratings: String,
    image: String,
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date
})

const productModel =  mongoose.model('Product', productSchema)

module.exports = productModel

