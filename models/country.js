import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
  country: String
}, { timestamps: true });

const Country = mongoose.model("country", countrySchema);

export default Country;
