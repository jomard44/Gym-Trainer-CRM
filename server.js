import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get("/",(req,res)=>{
    res.json({message:"hello world"})
})

mongoose.connect(process.env.DB).then(
app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})
)
