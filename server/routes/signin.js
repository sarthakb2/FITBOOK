import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";

import wrapAsync from "../utils/wrapAsync.js";

router.get("/", (req, res) => {
  res.send("SIGNIN PAGE");
});

router.post("/", async (req, res) => {
  let { username, password } = req.body;
  let user = await usermodel.findOne({ username: username });
  if (user.password === password) {
    res.send("working");
  }
  else res.send("Password Wrong")
});

export default router;
