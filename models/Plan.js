import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  planTitle: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  pricePerMonth: {
    type: Number,
    required: true,
  },
  planDetails: [
    {
      feature: String,
      description: String,
    },
  ],
  planId: {
    type:Number,
    required: true,
    unique: true,
    default: 1,
  },
  popularity:{
    type:Boolean,
    default:false
  }
}, { timestamps: true });

const Plan = mongoose.model("Plan", planSchema);

export default Plan;