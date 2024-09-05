import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import bodyParser from "body-parser";
import connectToDatabase from "./config/db.js";
connectToDatabase();

import signup from "./routes/signup.js";
import signin from "./routes/signin.js";
import search from "./routes/search.js";
import businessSetup from "./routes/setupbusiness.js";
import community from "./routes/community.js";
import post from "./routes/post.js";



const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/signup", signup);
app.use("/signin", signin);
app.use("/search", search);
app.use("/businessSetup", businessSetup)
app.use("/post", post)
app.use("/community", community)

app.listen(PORT, () => {
  console.log("Server Started");
});
