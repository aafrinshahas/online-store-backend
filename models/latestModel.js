const mongoose = require('mongoose');

const latestSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date
})

const LatestModel =  mongoose.model('Latest', latestSchema)

module.exports = LatestModel