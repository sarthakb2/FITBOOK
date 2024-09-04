import mongoose from "mongoose";

const user = mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalArea: {
    type: String,
    required: true,
  },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

export default mongoose.model("User", user);
