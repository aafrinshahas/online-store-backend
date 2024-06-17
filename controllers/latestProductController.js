const LatestModel = require('../models/latestModel')

//get products api - /api/v1/latestproduct - latestproduct
exports.getLatestProducts =  async (req, res, next) => {
    const LatestProducts =  await LatestModel.find({})
 res.json(
     {
         succes: true,
         LatestProducts
     }
 )
 }