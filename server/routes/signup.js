import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";



router.get("/", (req, res) => {
  res.send("SIGNUP PAGE");
});
router.post("/api/user", async (req, res) => {
  const { name, username, password, email, state, city, postalArea } = req.body;
  const user = await usermodel.create({
    name: name,
    username: username,
    email: email,
    password: password,
    state: state,
    city: city,
    postalArea: postalArea,
  });
  res.send(user);
});
export default router;
