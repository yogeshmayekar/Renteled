import CustomErrorHandler from "../utils/error.js";
import Booking from '../models/booking.js';
import Joi from 'joi';

export const bookingHotel =async(req, res, next)=>{
    try{
        const bookingSchema = Joi.object({
            bookingId: Joi.string().required(),
            hotelId: Joi.string().required(),
            userId: Joi.string().required(),
            checkinDate: Joi.string().required(),
            checkoutDate: Joi.string().required(),
            numberOfRooms: Joi.string().required(),
            numberOfGuests: Joi.string().required(),
            amount: Joi.number().required(),
            paymentStatus: Joi.string(),
            bookingStatus: Joi.string()
          });

          const {error} = bookingSchema.validate(req.body);

          if (error){
            // console.log("validation error",error.details[0].message)
            res.status(400).json({ message: error.details[0].message });
        } 

        const generateBookingId=()=>{
            const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let randomChars = ''; 
            for (let i = 0; i < 4; i++) {
                randomChars += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
            }

            const randomNumber = Math.floor(1000 + Math.random() * 9000);

            const bookingId = randomChars + randomNumber;
            return bookingId;
        }
        const bookingId = generateBookingId();
        // console.log(bookingId)

        // to check id is already existing in db or not 
        const existingBookingId = await Booking.findOne({ bookingId: req.body.bookingId });
        // console.log("booking id exist",existingBookingId)

            const newBooking= new Booking({
                bookingId:existingBookingId ? bookingId : req.body.bookingId,
                hotelId: req.body.hotelId,
                userId: req.body.userId,
                checkinDate: new Date(req.body.checkinDate),
                checkoutDate:new Date(req.body.checkoutDate),
                numberOfRooms: req.body.numberOfRooms,
                numberOfGuests: req.body.numberOfGuests,
                amount:req.body.amount ,
                paymentStatus: req.body.paymentStatus,
                bookingStatus:req.body.bookingStatus,
               })
    
               const bookingInfo = await newBooking.save();
               res.status(200).json({message:"Booking Confirmed", bookingInfo});

    }catch(error){
        console.log(error)
    }
    
}

export const basedOnBookingId=async(req, res, next)=>{
    // console.log("one")
    try{
        const bookingById = await Booking.findOne({ bookingId: req.params.bookingId });
        res.status(200).json({bookingById});
    }catch(error){
        res.status(400).json({message:"Error While fetching Bookings."});
    } 
}

export const bookingsByUserId=async(req, res, next)=>{
    // console.log("one")
    try{
        const existingBookingByUser = await Booking.find({ userId: req.params.userId });
        res.status(200).json({existingBookingByUser});
    }catch(error){
        res.status(400).json({message:"Error While fetching Bookings."});
    } 
}

export const bookingsForHotels=async(req, res, next)=>{
    // console.log("two")
    try{
        const existingBookingForHotels = await Booking.find({ hotelId: req.params.hotelId });
        res.status(200).json({existingBookingForHotels});
    }catch(error){
        res.status(400).json({message:"Error While fetching Bookings."});
    } 
}

export const toGetAllUser = async(req, res, next)=>{
    // console.log("theww")
    try{
        const existingBookings = await Booking.find();
        res.status(200).json({existingBookings});
    }catch(error){
        res.status(400).json({message:"Error While fetching Bookings."});
    } 
}