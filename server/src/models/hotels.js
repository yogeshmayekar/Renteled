import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name:{type: String, require:true},
    type:{type:String, require:true},
    city:{type:String, require:true},
    adress:{type:String, require:true},
    title:{type:String, require:true},
    distance:{type:String, require:true},
    photos:{type:[String], require:true},
    description:{type:String, require:true},
    rating:{type:Number, min:0, max:5},
    rooms:{typeof:[String]},
    actualPrice:{type:Number,require:true},
    cheapestPrice:{type:Number,require:true},
    featured: {type: Boolean, default: false},
    amenities: {type: Map, of: Boolean, required: true},
})

export default mongoose.model("Hotel", hotelSchema );