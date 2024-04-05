import CustomErrorHandler from "../utils/error.js";
import Booking from '../models/booking.js';
import Joi from 'joi';

export const bookingHotel =async(req, res, next)=>{
    try{
        const bookingSchema = Joi.object({
            hotelId: Joi.string().required(),
            userId: Joi.string().required(),
            checkinDate: Joi.date().required(),
            checkoutDate: Joi.date().required(),
            numberOfRooms: Joi.number().integer().positive().required(),
            numberOfGuests: Joi.number().integer().positive().required(),
            amount: Joi.number().positive().required()
          });

          const {error} = bookingSchema.validate(req.body);

          if (error){
            // console.log(error.details[0].message )
            return res.status(400).json({ message: error.details[0].message });
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

        // to check id is already existing in db or not 
        const existingBookingId = await Booking.findOne({ bookingId: bookingId });

        if(!existingBookingId){
           const newBooking= new Booking({
            bookingId:bookingId,
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

           await newBooking.save()
           res.status(200).send("Booking Confirmed");
        }


    }catch(error){
        console.log(error)
    }
    
}