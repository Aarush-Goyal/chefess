import mongoose from "mongoose";

const Schema = mongoose.Schema;

// user schema

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
});

mongoose.model("users", userSchema);
