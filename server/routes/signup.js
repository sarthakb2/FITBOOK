import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";



router.get("/", (req, res) => {
  res.send("SIGNUP PAGE");
});
router.post("/", async (req, res) => {
  const { name, username, password, email, state, city, postalArea } = req.body;
  const user = await usermodel.create({
    name: name,
    username: username,
    email: email,
    password: password,
    state: state.toLowerCase(),
    city: city.toLowerCase(),
    postalArea: postalArea.toLowerCase(),
  });
  res.status(201).json("Created")
});
export default router;
