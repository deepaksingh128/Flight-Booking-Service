const express = require('express');

const router = express.Router();

const bookingRoutes = require('./booking');

const { InfoController } = require('../../controllers');  // requiring the controller (i.e. last middleware) 
       // do not forget to destructure the above thing
       
router.get('/info', InfoController.info);

router.use('/bookings', bookingRoutes);

module.exports = router;