import express from 'express';
import {emailSubscribe} from '../controllers/emailSubscribe.js';

const router = express.Router();

router.post("/subscribe_with_email", emailSubscribe)

export default router;