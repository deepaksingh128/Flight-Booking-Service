const { Router } = require('express');

const { BookingController } = require('../../controllers');

const router = Router();

router.post(
    '/',
    BookingController.createBooking
)

module.exports = router;