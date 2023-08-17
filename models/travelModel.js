const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
    name : {type: String, required:true},
    email : {type: String, required:true},
    destination : {type: String, enum : ['India', 'Africa', 'Europe', 'America'], default: 'India', required:true},
    travellers : {type: Number, required:true},
    budget : {type: Number, required:true}
},{
    versionKey:false
})

const travelModel = mongoose.model('travel',travelSchema)

module.exports = travelModel