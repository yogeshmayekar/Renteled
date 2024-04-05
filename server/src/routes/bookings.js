import express from 'express';
const router = express.Router();
import {bookingHotel} from '../controllers/booking.js';

// create booking 
router.post("/:booking_id", bookingHotel);

export default router;