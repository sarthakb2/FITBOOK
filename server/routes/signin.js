import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.SECRET;
import jwt from "jsonwebtoken";
router.get("/", (req, res) => {
  res.send("SIGNIN PAGE");
});

router.post("/", async (req, res) => {
  let { email, password } = req.body;
  console.log(email + " "+ password);
  let user = await usermodel.findOne({ email: email });
  if(user === null) return res.status(400).json("User not found");
  if (user.password === password) {
    console.log("Success");
    return res.status(200).json({ email: email });
  }
  else return res.status(400).json("Something went wrong");
});

export default router;
