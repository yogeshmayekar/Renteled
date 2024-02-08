import Email from '../models/email.js';
import Joi from 'joi';
import CustomErrorHandler from "../utils/error.js";


export const emailSubscribe = async(req, res, next)=>{
    try{
        const registerSchema = Joi.object({
            email:Joi.string().email().required(),
        })

        const {error} = registerSchema.validate(req.body);

        if (error){
            return res.status(400).json({ message: error.details[0].message });
        }

        const Exist = await Email.exists({email:req.body.email});//it will return true or false
        // console.log("is exists?",Exist);
        if(Exist) {
            return res.status(400).json(CustomErrorHandler.alreadySubscrub("Email Id already subscribed"));
        }

        const newEmail = new Email(
            {email:req.body.email}
        )

        await newEmail.save();
        return res.status(200).send("Email subscribed");


    }catch(err){
        return res.status(400).json(CustomErrorHandler.unableToSubscribe());
    }
}
