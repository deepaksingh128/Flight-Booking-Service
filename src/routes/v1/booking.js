const { Router } = require('express');

const { BookingController } = require('../../controllers');

const router = Router();

router.post(
    '/',
    BookingController.createBooking
)

router.post(
    '/payments',
    BookingController.makePayment
)

module.exports = router;