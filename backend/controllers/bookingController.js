const Booking = require('../models/booking');
const Room = require('../models/room')

exports.createBooking = async (req, res) => {
  try {
    const { name, email, mobile_no, room_code, booking_from, booking_to } =
      req.body;

    if (!name || !email || !mobile_no) {
      return res.status(400).json({
        message: 'name, email, and mobile no. are required',
      });
    }

    // check if room code exist
    const room = await Room.findOne({code : room_code});

    if(!room) {
        return res.status(400).json({
            message: "room with provided room code not found"
        })
    }

    const booking = await Booking.create({
      name,
      email,
      room_code,
      mobile_no,
      booking_from,
      booking_to,
    });

    res.status(200).json({
      success: true,
      booking,
    });
    
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
