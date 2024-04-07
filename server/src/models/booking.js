import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bookingId: {type: String, required: true, unique: true},
  hotelId: {type: String, required: true},
  userId: {type: String, required: true},
  bookedByName:{type:String, required:true},
  hotelName:{type:String, required:true},
  bookingEmailId:{type:String, required:true},
  checkinDate: {type: String, required: true},
  checkoutDate: {type: String, required: true},
  numberOfRooms: {type: Number, required: true},
  numberOfGuests: {type: Number, required: true},
  amount: {type: Number, required: true},
  paymentStatus: {type: String, enum: ['pending', 'paid'], default: 'pending'},
  bookingStatus: {type: String, enum: ['confirmed', 'cancelled', 'checkout'], default: 'pending'},
}, {timestamps:true});

export default mongoose.model('Booking', bookingSchema);
