const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const connectDatabase = require('./connectDatabase')
const port = process.env.PORT
const production = process.env.NODE_ENV


const products = require('./routes/product')
const orders = require('./routes/order')
const latest = require('./routes/latest')

connectDatabase();
app.use(express.json())
app.use(cors())

app.use('/api/v1', products)
app.use('/api/v1', orders)
app.use('/api/v1', latest)






app.listen(port, ()=>{
    console.log(`server started in ${port} for ${production}`)
})