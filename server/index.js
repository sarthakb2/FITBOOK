import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./config/db.js";
connectToDatabase();




import signup from "./routes/signup.js" ;
import signin from "./routes/signin.js" ;

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/signup", signup);
app.use("/signin", signin);



app.listen(PORT, () => {
  console.log("Server Started");
});
