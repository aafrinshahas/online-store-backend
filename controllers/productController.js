const ProductModel = require('../models/productModel')


//get products api - /api/v1/products
exports.getProducts =  async (req, res, next) => {
    const query = req.query.keyword?{title: {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
   const products =  await ProductModel.find(query)
res.json(
    {
        succes: true,
        products
    }
)
}


//get simgle products api - /api/v1/product/id
// exports.getSingleProducts = async (req, res, next) => {
//     console.log(req.params.id, 'ID')

//     try{
//         const product = await ProductModel.findById(req.params.id);
//         res.json(
//             {
//                 succes: true,
//                 product
//             }
//         )
//     } catch (error) {
//         res.status(404).json({
//             succes: false,
//             message: error.message
//         })
//     }
   
//     }