import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: String,
  phone: String,
  lat: Number,
  lng: Number,
  category: String,
  rating: Number,
  isActive: { type: Boolean, default: true },
});

export default mongoose.model("Restaurant", RestaurantSchema);
