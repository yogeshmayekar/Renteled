import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{type: String, require:true},
    email:{type: String, require:true, unique:true},
    phoneNumber:{type: String, unique:true},
    password:{type:String},
    isAdmin: {type: Boolean, default: false},
}, {timestamps:true}); 


export default mongoose.model("User", userSchema );