import Review from "../models/review.js";
import Joi from "joi";

export const newReview=async(req,res,next)=>{
 try{
    const newReviewSchema = Joi.object({
        username: Joi.string().required(),
        reviewMessage:Joi.string().required(),
        rating:Joi.number().required(),
    });

    const {error} = newReviewSchema.validate(req.body);
    if (error){
        // console.log(error.details[0].message )
        return res.status(400).json({ message: error.details[0].message });
    } 

    const newReview = new Review({
        hotelId:req.params.hoteId,
        username:req.body.username,
        reviewMessage:req.body.reviewMessage,
        rating:req.body.rating,
    })

    const resx=await newReview.save();
    console.log(resx)
    res.status(200).json({message:"Review added."})
    
 }catch(error){
    res.status(500).json({message:"Try after sometime."});
 }
}