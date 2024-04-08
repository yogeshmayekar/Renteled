import express from 'express';
const router = express.Router();
import {newReview, getAllReview, getReviewForHotels, deleteReview} from '../controllers/review.js';
import { verifyUser, verifyAdmin } from '../utils/jwtservice.js';

// to post new review 
router.post("/:hoteId", verifyUser, newReview);

//to get all reviews
router.get("/find", verifyAdmin, getAllReview);

//to get review for hotel
router.get("/find/:hoteId",verifyUser, getReviewForHotels);

//delete review based on 
router.delete("/:id",verifyAdmin, deleteReview);

export default router