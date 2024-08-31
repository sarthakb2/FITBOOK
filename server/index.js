import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from "./config/db.js";
connectToDatabase();
import usermodel from "./models/user.model.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/api/user",async (req,res)=>{
    const {username,password,email,state,city,postalArea} = req.body;
    const user = await usermodel.create({
        username,
        password,
        email : email,
        state,
        city,
        postalArea
    });
    res.send(user);
})

app.listen(PORT,()=>{
    console.log("Server Started");
})