const mongoose=require('mongoose')
require('dotenv').config()
const connection=mongoose.connect(process.env.DB_Mongo_URL)
module.exports={connection}