import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Post", postSchema);
