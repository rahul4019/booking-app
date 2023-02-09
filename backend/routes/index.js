const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    greeting: 'Hello from booking api',
  });
});

router.use('/hotel', require('./hotel'));
router.use('/room', require('./room'));
router.use('/booking', require('./booking'));

module.exports = router;
