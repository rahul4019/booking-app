const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
  },
  room_code: {
    type: String,
    required: true,
  },
  booking_from: {
    type: Date,
    required: true,
  },
  booking_to: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);
