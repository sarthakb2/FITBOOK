import express from "express";
const router = express.Router();
import usermodel from "../models/user.model.js";



router.get("/", (req, res) => {
  res.send("SIGNUP PAGE");
});
router.post("/api/user", async (req, res) => {
  const { username, password, email, state, city, postalArea } = req.body;
  const user = await usermodel.create({
    username: username,
    password: password,
    email: email,
    state: state,
    city: city,
    postalArea: postalArea,
  });
  res.send(user);
});
export default router;
