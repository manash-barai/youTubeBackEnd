import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roles:{
    type:String,
    default:"user"
  },
  password: { 
    type: String,
    required: true,
  },
  email: { type: String, required: true, trim: true, unique: true, lowercase: true },

  planId: {
    type:String,
    default:1
    
  },
  searchApiHitCount: {
    type: Number,
    default: 0,
  },
  searchApiHitDay:{
    type: String,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  is_verified:{
    type: Boolean,
    default:false
  },
  country:{
    type:String
  },

  channel: [
    {
      channelName: {
        type: String,
      },
      channelEmail: {
        type: String,
      },
    },
  ],
},{timestamps:true})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel