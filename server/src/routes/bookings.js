import express from 'express';
const router = express.Router();
import {bookingHotel, bookingsByUserId, bookingsForHotels, toGetAllUser, basedOnBookingId} from '../controllers/booking.js';
import {verifyUser, verifyAdmin} from '../utils/jwtservice.js';


// create booking (by user or admin)
router.post("/", verifyUser,  bookingHotel);

//get booking based on bookingid
router.get("/find/:bookingId", verifyUser, basedOnBookingId);

// get booking by perticlar user 
router.get("/get-user-bookings/:userId",verifyUser, bookingsByUserId);

// get booking for hotels 
router.get("/get-hotel-bookings/:hotelId",verifyAdmin, bookingsForHotels);

//get allBooking 
router.get("/get-all-bookings",verifyAdmin, toGetAllUser);

export default router;