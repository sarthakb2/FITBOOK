import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";

router.post("/", async (req, res) => {
  let { searchItem } = req.body;
  console.log(req.body);
  searchItem = searchItem.toLowerCase();
  let users = await usermodel.findOne({
    $or: [{ name: searchItem }, { username: searchItem }],
  });
  if (users) {
    console.log(users);
    res.send("USER FOUND");
  } else res.send("USER NOT FOUND");
});

export default router;
