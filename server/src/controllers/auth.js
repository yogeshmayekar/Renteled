import User from "../models/user.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { JWT_SECRET, DEBUG_MODE } from "../config/index.js";
import CustomErrorHandler from "../utils/error.js";
import {mainMailer} from '../utils/nodeMailer.js';
import { now } from "mongoose";

let otpMap = new Map(); 
//1. register controller 
export const register = async(req, res, next)=>{
    try{
        //1.1 validation
    
        const registerSchema = Joi.object({
            firstName:Joi.string().min(3).max(10).required(),
            lastName:Joi.string().min(3).max(10).required(),
            email:Joi.string().email().required(),
            password:Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?`~\\-=[\\];\',./]{3,30}$')).required(),
            repeat_password:Joi.string().valid(Joi.ref('password')).required(),
            isAdmin:Joi.boolean()
        })

        // console.log(req.body);
  
        const {error} = registerSchema.validate(req.body);
        // console.log(error.message);
        if (error){
            return res.status(400).json({ message: error.details[0].message });
        }

        //1.2 check user is in the database already
        try{
            const Exist = await User.exists({email:req.body.email});//it will return true or false
            // console.log("is exists?",Exist);
            if(Exist) {
                return res.status(400).json(CustomErrorHandler.alreadyExist("Email Id is already Exist"));
        }
        }catch(err){
            next()
        }

    
        //1.3 Hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const fullName = req.body.firstName + " " + req.body.lastName;
        // console.log(fullName);
        //1.4 prepare the model
        const newUser = new User({
            username:fullName,
            email:req.body.email,
            password:hashedPassword
        })
        
        await newUser.save()
        res.status(200).send("User has been created.");
    }catch(err){
        // console.log(err)
        if(DEBUG_MODE){
            console.log(err);
        }
        return res.status(400).json(CustomErrorHandler.unableToCreateUser("try after some time."))
    }
}


//2. login controller 
export const login = async(req, res, next)=>{
    try{
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(3).required(),
            rememberMe:Joi.boolean(),
        });

        const {error} = loginSchema.validate(req.body);

        if (error){
            // console.log(error.details[0].message )
            return res.status(400).json({ message: error.details[0].message });
        } 


        const user = await User.findOne({email:req.body.email})
        // console.log("cc is",CustomErrorHandler.incorerctUser())
        if(!user) return res.status(400).json(CustomErrorHandler.incorerctUser())

        //compare the password
        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match){
            return res.status(400).json(CustomErrorHandler.incorerctPassword())
        }

        //token
        const rememberMe = req.body.rememberMe;
        // console.log("remember me is",rememberMe);
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, JWT_SECRET, {expiresIn: rememberMe ? "30d":"1d"})
        const decodedToken = jwt.verify(token, JWT_SECRET);
        const expirationTimestamp = decodedToken.exp * 1000;
        const expirationDate = new Date(expirationTimestamp);

        const {_id, isAdmin, username, email, phoneNo} = user._doc
        const otherDetails ={
            username,
            email,
            phoneNo,
            _id
        }
       
        res.cookie("access_token", token, {
            httpOnly: true,
            // secure: true, // Ensure your website is served over HTTPS
            // sameSite: 'None', // avoid cross site request
        }).status(200).json({details: otherDetails, isAdmin, access_token:token, expiration: expirationDate});

    }catch(err){
        if(DEBUG_MODE===true){
            console.log(err);
        }
        res.status(400).json(CustomErrorHandler.unAuthorized());
    }

}

//logout 
export const logout = (req, res, next)=>{
    res.clearCookie('jwtToken', {path:'/'});
    return res.status(200).json({ message: 'Logout successful'});
}

//get otp logic
export const getOtpLogic=async(req, res, next)=>{
    try{
        const otp = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        //send otp through email
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            userName: Joi.string().required(),
            phoneNumber:Joi.string().required(),
        });

        const {error} = loginSchema.validate(req.body);

        if (error){
            return res.status(400).json({ message: error.details[0].message });
        } 
        
        const userName = req.body.userName;
        const toEmail = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        
        try{
            // mainMailer(toEmail, otp, userName);
            otpMap.set(phoneNumber, otp);
            res.status(200).json({message:'OTP sent sucessfully.', otp })
        }catch(err){
            res.json(CustomErrorHandler.unableToSendOtp);
        }


    }catch(error){
        res.status(500).json({ error: 'Failed to send OTP. Please try again later.'});
    }
}

export const verifyOtpLogic=async(req,res,next)=>{
    try{
        const { phoneNumber, otp } = req.body;
        if (!otpMap.has(phoneNumber)) {
         res.status(400).json({ success: false, message: 'OTP not generated for this number' });
         return
        }
        // console.log("otp veri", otpMap.get(phoneNumber) )
        if (otpMap.get(phoneNumber) == otp) {
            res.status(200).json({ success: true, message: 'OTP verified successfully' });
            otpMap.delete(phoneNumber);
            return
        }else{
          res.status(400).json({ success: false, message: 'Incorrect OTP' });
          return
        }

    }catch(error){
        res.status(500).json({ error: 'Failed to Verify OTP. Please try again later.'});
    }
}

//update password
export const updatePasswordLogic=async(req,res,next)=>{
    try{
        const updatePasswordSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
            newPassword:Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?`~\\-=[\\];\',./]{3,30}$')).required(),
        });

        const {error} = updatePasswordSchema.validate(req.body);

        if (error){
            // console.log(error.details[0].message )
            return res.status(400).json({ message: error.details[0].message });
        } 


        const user = await User.findOne({email:req.body.email})
        // console.log("cc is",CustomErrorHandler.incorerctUser())
        if(!user) return res.status(400).json(CustomErrorHandler.incorerctUser())

        const{_id, password}=user._doc

        //compare the existing password
        const match = await bcrypt.compare(req.body.password, password)
        if(!match){
            return res.status(400).json(CustomErrorHandler.incorerctPassword())
        }

        // Hashing new password
        const salt = bcrypt.genSaltSync(10);
        const hashedNewPassword = await bcrypt.hash(req.body.newPassword, salt);

        const updatedPasswordUser = await User.findByIdAndUpdate(
            _id,
            { $set: { password: hashedNewPassword } },
            { new: true }
          );
          res.status(200).json({message:"password updated successfully."});

    }catch(error){
        res.status(500).json({ error: 'Failed to Update password'});
    }
}

//update password directly
export const updatePasswordDirectlyLogic=async(req, res, next)=>{
    try{
        const updatePasswordSchema = Joi.object({
            email: Joi.string().email().required(),
            newPassword:Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?`~\\-=[\\];\',./]{3,30}$')).required(),
        });

        const {error} = updatePasswordSchema.validate(req.body);

        if (error){
            // console.log(error.details[0].message )
            return res.status(400).json({ message: error.details[0].message });
        } 

        const user = await User.findOne({email:req.body.email})
        // console.log("cc is",CustomErrorHandler.incorerctUser())
        if(!user) return res.status(400).json(CustomErrorHandler.incorerctUser())

        const{ _id }=user._doc

        const salt = bcrypt.genSaltSync(10);
        const hashedNewPassword = await bcrypt.hash(req.body.newPassword, salt);

        const updatedPasswordUser = await User.findByIdAndUpdate(
            _id,
            { $set: { password: hashedNewPassword } },
            { new: true }
          );
          res.status(200).json({message:"password updated successfully."});
    }catch(error){
        res.status(500).json({ error: 'Failed to Update password'}); 
    }
}