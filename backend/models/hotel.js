const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
  hotel_picture: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rooms: [{ type: mongoose.Schema.ObjectId }],
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;