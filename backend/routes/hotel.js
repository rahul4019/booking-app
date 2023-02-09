const express = require('express');
const router = express.Router();

const multer = require('multer');
const photosMiddleware = multer({ dest: 'uploads/' });

const { createHotel } = require('../controllers/hotelController');

router.post('/create', photosMiddleware.single('hotel_picture'), createHotel);

module.exports = router;
