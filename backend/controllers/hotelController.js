const Hotel = require('../models/hotel');
const fs = require('fs');

exports.createHotel = async (req, res) => {
  try {
    const { name, code, status, address } = req.body;
    const hotel_picture = req.file;
    if (!hotel_picture) {
      return res.status(400).json({
        message: 'please provide hotel picture',
      });
    }

    const { path, originalname } = hotel_picture;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];

    const newPath = `uploads/${name}.${ext}`;

    fs.renameSync(path, newPath);

    if (!name || !code || !status || !hotel_picture || !address) {
      return res.status(400).json({
        message: 'name, code, status, hotel_picture and address are required',
      });
    }

    const hotel = await Hotel.create({
      name,
      code,
      status,
      hotel_picture: newPath,
      address,
    });

    res.status(200).json({
      success: true,
      hotel,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};
