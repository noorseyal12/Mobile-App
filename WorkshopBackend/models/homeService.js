const mongoose = require("mongoose");

const homeServiceSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const HomeService = mongoose.model("HomeService", homeServiceSchema);

module.exports = HomeService;
