// Import required modules
import mongoose from 'mongoose';

// Define the review schema
const reviewSchema = new mongoose.Schema({
  hotelId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  reviewMessage: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, {timestamps:true});

// Create the review model
export default mongoose.model('Review', reviewSchema);

