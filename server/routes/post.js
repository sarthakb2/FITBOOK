import express, { response, text } from "express";
const router = express.Router();
import postModel from "../models/post.model.js";
import usermodel from "../models/user.model.js";

router.get("/", async (req, res) => {
  const posts = await postModel.find().populate("user");
  // console.log(posts);
  const postArray =[];
   posts.map(async (post) => {
    const username = post.user[0].username;
  const postObj = {
    text: post.text,
    image: post.image,
    username : username
  } 
  postArray.push(postObj); 
  })
  return res.status(200).json(
    postArray
  );
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
