const mongoose = require("mongoose");

const bookAppointmentSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  homeAddress: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const appointmentModel = mongoose.model(
  "appointments",
  bookAppointmentSchema
);

module.exports = appointmentModel;
