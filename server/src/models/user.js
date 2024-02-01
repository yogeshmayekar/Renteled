import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName:{type: String, require:true},
    email:{type: String, require:true, unique:true},
    password:{type:String, require:true},
    isAdmin: {type: Boolean, default: false},
}, {timestamps:true}); 


export default mongoose.model("User", userSchema );