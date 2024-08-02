const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  planTitle: {
    type: String,
    required: true,
  },
  pricePerMonth: {
    type: Number,
    required: true,
  },
  planDetails: [
    {
      type: String,
    },
  ],
  planId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    default: 1,
  },
}, { timestamps: true });

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
