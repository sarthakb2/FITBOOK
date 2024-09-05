import express, { response, text } from "express";
const router = express.Router();
import communityModel from "../models/community.model.js";
import usermodel from "../models/user.model.js";

router.get("/:id", async (req, res) => {
  const { id } = req.params;
   let user = await usermodel.find({email : id});
   
   const filter = {
      city : user[0].city,
      state : user[0].state,
      postalArea : user[0].postalArea,
   }
   let community = await communityModel.find({
    state : filter.state,
   });
   if(community.city==filter.city && community.postalArea == filter.postalArea){
    community = community;
   return res.status(200).json(community);
   }
   else return res.status(404).json("No Community Found");
   
});

router.post("/", async (req, res) => {
  const { name,city,state,postalArea,sport } = req.body;
  let community = await communityModel.create({ 
    name,
    city,
    state,
    postalArea,
    sport
   });

  res.status(201).json("Community Created");
});
export default router;
