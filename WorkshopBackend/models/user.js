const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  otp: {
    type: Number,
  },
  isVerified: {
    type: Boolean,
  },
});

// Base User model
const User = mongoose.models.Users || mongoose.model("Users", userSchema);

// Schema for a Vehicle Owner
const vehicleOwnerSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
  },
});

// Schema for Worker
const workerSchema = new mongoose.Schema({
  workshopName: {
    type: String,
  },
  workshopAddress: {
    type: String,
  },
});

// Create discriminators
const VehicleOwner = User.discriminator("VehicleOwner", vehicleOwnerSchema);
const Worker = User.discriminator("Worker", workerSchema);
module.exports = {
  User,
  VehicleOwner,
  Worker,
};
