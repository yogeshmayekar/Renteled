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
    res.status(200).json({message:"Review added."})
    
 }catch(error){
    res.status(500).json({message:"Try after sometime."});
 }
}

export const getAllReview=async(req, res, next)=>{
    try{
        const resd = await Review.find();
        res.status(200).json(resd)
    }catch(error){
        res.status(500).json({message:"Try after sometime."});
    }
}

export const getReviewForHotels=async(req, res, next)=>{
    try{
        const resData = await Review.find({hotelId:req.params.hoteId})
        res.status(200).json(resData);
    }catch(error){
        res.status(500).json({message:"Try after sometime."});
    }
}

export const deleteReview=async(req, res, next)=>{
    try{
        const deleted = await Review.findByIdAndDelete({_id:req.params.id});
        console.log(deleted)
        if(deleted){
            res.status(200).json({message:"Review deleted Successfully."});
        }else{
            res.status(500).json({message:"Id required."})
        }
    }catch(error){
        res.status(500).json({message:"canot delete now"})
    }
}