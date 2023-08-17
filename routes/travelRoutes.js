const express = require("express");
const travelModel = require("../models/travelModel");
const travelRouter = express.Router();

// ---------Post Route-------------
travelRouter.post("/post", async(req,res)=>{
    try {
        const travel = new travelModel(req.body)
        await travel.save()
        res.status(200).json({"message":"Travel data posted successfully"})
    } catch (error) {
        console.log(error)
        res.status(501).json({"Error":"Error in posting travel data"})
    }
})

// ---------Retrive Route-------------
travelRouter.get("/get", async(req,res)=>{
    try {
        const travels = await travelModel.find()
        res.status(200).json(travels)
    } catch (error) {
        console.log(error)
        res.status(501).json({"Error":"Error in getting travel data"})
    }
})

// ---------Delete Route-------------
travelRouter.delete("/delete/:id", async(req,res)=>{
    try {
        await travelModel.findByIdAndDelete(req.params.id)
        res.status(200).json({"message":"Data deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(501).json({"Error":"Error in deleting travel data"})
    }
})

// ---------Filter Route-------------
travelRouter.get("/filter/:destination", async(req,res)=>{
    try {
        const destination = req.params.destination;
        if(destination==="All"){
            const travel = await travelModel.find()
            res.status(200).json(travel)
        }else{
            const travel = await travelModel.find({destination})
            if(!travel){
                res.status(200).json({"message":"No data found"})
            }else{
                res.status(200).json(travel)
            }
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({"Error":"Error in filtering travel data"})
    }
})

// -----------Sort Route-------------
travelRouter.get("/sort/:order", async(req,res)=>{
    try {
        const sortOrder = req.params.order === "asc" ? 1 : -1
        const travel = await travelModel.find().sort({budget : sortOrder})
        res.status(200).json(travel)
    } catch (error) {
        console.log(error)
        res.status(501).json({"Error":"Error in sorting travel data"})
    }
})


module.exports = {travelRouter};