import express from "express";
const router = express.Router();
import businessModel from "../models/user.model.js";

router.get("/", (req, res) => {
  res.send("BUSINESS SIGNUP PAGE");
});

router.post("/api/user", async (req, res) => {
  const { name, image, phoneNo, email, address, state, city, postalArea } =
    req.body;
  const business = await businessModel.create({
    name: name,
    image: image,
    phoneNo: phoneNo,
    email: email,
    address: address,
    state: state,
    city: city,
    postalArea: postalArea,
  });
  res.send(business);
});

export default router;
