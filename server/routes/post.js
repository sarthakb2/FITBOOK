import express from "express";
const router = express.Router();
import postModel from "../models/post.model.js";
import usermodel from "../models/user.model.js";

router.get("/", (req, res) => {
  res.send("GET POSTS");
});

router.post("/", async (req, res) => {
  const { text, image, email } = req.body;
  let user = await usermodel.findOne({ email: email });
  const newPost = await postModel.create({
    text: text,
    image: image,
    email: email,
  });
  user.posts.push(newPost);
  newPost.user.push(user);

  await newPost.save();
  await user.save();

  res.status(201).json("Post Created");
});
export default router;
