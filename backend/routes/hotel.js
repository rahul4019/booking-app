const express = require('express');
const router = express.Router();

const multer = require('multer');
const photosMiddleware = multer({ dest: 'uploads/' });

const { createHotel, getAllHotels } = require('../controllers/hotelController');

router.post('/create', photosMiddleware.single('hotel_picture'), createHotel);
router.get('/allhotels', getAllHotels);
   
module.exports = router;
