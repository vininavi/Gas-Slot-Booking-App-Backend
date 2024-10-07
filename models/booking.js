import mongoose, { models } from "mongoose";

const BookingSchema = new mongoose.Schema({
  providerId: mongoose.Schema.Types.ObjectId,
  slot: String,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Booking', BookingSchema);
export default models;