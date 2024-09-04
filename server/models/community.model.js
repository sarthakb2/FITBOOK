import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  membersCount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  postalCode: {
    type: String,
    required: true,
    trim: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export default mongoose.model("Community", CommunitySchema);
