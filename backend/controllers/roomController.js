const Room = require('../models/room');
const Hotel = require('../models/hotel');

exports.addRoom = async (req, res) => {
  try {
    const { hotel, code, status, type } = req.body;

    if (!hotel || !code || !status || !type) {
      return res.status(400).json({
        message: 'hotel, code, status, and type is required',
      });
    }

    // find hotel
    const hotelDoc = await Hotel.findById(hotel);

    if (!hotelDoc) {
      return res.status(400).json({
        message: 'hotel not found, please check hotel id',
      });
    }

    // create room
    const room = await Room.create({
      hotel,
      code,
      status,
      type,
    });

    // put reference of room into the "rooms" array of hotel
    await hotelDoc.updateOne({
      $push: { rooms: room},
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({
      message: 'Internal server errror',
    });
  }
};
