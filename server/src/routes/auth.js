import express from 'express';
const router = express.Router(); 
import {register, adminRegister, login, adminLogin , logout, getOtpLogic, verifyOtpLogic, updatePasswordLogic, updatePasswordDirectlyLogic} from '../controllers/auth.js';


router.post("/register", register);
router.post("/admin_register", adminRegister);
router.post("/login", login);
router.post("/admin_login", adminLogin);
router.post("/logout", logout);
router.post("/get_otp", getOtpLogic);
router.post("/verify-otp", verifyOtpLogic);
router.post("/update_password", updatePasswordLogic);
router.post("/update_password_directly", updatePasswordDirectlyLogic);

export default router;