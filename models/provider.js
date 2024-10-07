import mongoose from "mongoose";

const ProviderSchema = new mongoose.Schema({
  name: String,
  slots: [{ type: String }], 
});

module.exports = mongoose.model('Provider', ProviderSchema);
export default models;