const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect(process.env.mongoURL)
.then(()=>console.log("Connected to MongoDB"))
.catch(()=>console.log("Error in connecting to mongoDB"));

module.exports = {connection};