const express = require("express");
const app = express();
const {connection} = require("./config/connection");
const {travelRouter} = require("./routes/travelRoutes");
require('dotenv').config()
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/travel", travelRouter)


app.listen(process.env.PORT, async()=>{
    await connection
    .then(()=>console.log(`Server is running at PORT ${process.env.PORT}`))
    .catch((error)=>console.log("Error in running the server"))
})