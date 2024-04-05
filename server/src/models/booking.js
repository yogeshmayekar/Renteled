import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bookingId: {type: String, required: true, unique: true},
  hotelId: {type: String, required: true},
  userId: {type: String, required: true},
  checkinDate: {type: Date, required: true},
  checkoutDate: {type: Date, required: true},
  numberOfRooms: {type: Number, required: true},
  numberOfGuests: {type: Number, required: true},
  amount: {type: Number, required: true},
  paymentStatus: {type: String, enum: ['pending', 'paid'], default: 'pending'},
  bookingStatus: {type: String, enum: ['confirmed', 'cancelled', 'pending'], default: 'pending'},
}, {timestamps:true});

export default mongoose.model('Booking', bookingSchema);
