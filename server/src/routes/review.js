import express from 'express';
const router = express.Router();
import {newReview} from '../controllers/review.js';

// to post new review 
router.post("/:hoteId", newReview);

export default router