import User from "../models/user.js";
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { JWT_SECRET, DEBUG_MODE } from "../config/index.js";
import CustomErrorHandler from "../utils/error.js";


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
            const Exist = await User.exists({email:req.body.email});//it will returen true or false
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
        return res.status(400).json(CustomErrorHandler.unableToCreateUser("someting went wrong while sign up, please try after some time."))
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

        const { isAdmin, username, email, phoneNo} = user._doc
        const otherDetails ={
            username,
            email,
            phoneNo,
        }
       
        res.cookie("access_token", token, {
            httpOnly: true,
            // secure: true, // Ensure your website is served over HTTPS
            // sameSite: 'None', // avoid cross site request
        }).status(200).json({details: otherDetails, isAdmin });

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
    return res.status(200).json({ message: 'Logout successful' });
}