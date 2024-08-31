import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from "./config/db.js";
connectToDatabase();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/",(req,res)=>{
    res.send("heheh");
})

app.listen(PORT,()=>{
    console.log("Server Started");
})