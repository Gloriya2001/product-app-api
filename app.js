const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const products = require("./models/product")


const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hey")
})


app.get("/contact",(req,res)=>{
    res.send(" contact is here")
})

app.listen(8080,()=>{
    console.log("Server Started successfully")
})
