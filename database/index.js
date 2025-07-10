require('dotenv').config()
const mongoose = require('mongoose')
async function  connectToDatabase(){
await mongoose.connect(process.env.MONGODB_URI)
console.log('Database Connected Succesfully')

}

module.exports = connectToDatabase