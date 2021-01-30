import mongoose from "mongoose";

const Schema = mongoose.Schema;

// user schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default UserSchema;
