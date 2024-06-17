const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log('database connected')})
    .catch(()=>{console.log('connection error')})
}


module.exports = connectDatabase;