import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";

router.get("/", (req, res) => {
  res.send("SIGNIN PAGE");
});

router.post("/", async (req, res) => {
  let { email, password } = req.body;
  let user = await usermodel.findOne({ email: email });
  if (user.password === password) {
    res.send("working");
  }
  else res.send("Password Wrong")
});

export default router;
