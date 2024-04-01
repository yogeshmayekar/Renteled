import express from 'express';
const router = express.Router();
import {register, login, logout, getOtpLogic } from '../controllers/auth.js';


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/get_otp", getOtpLogic);

export default router;