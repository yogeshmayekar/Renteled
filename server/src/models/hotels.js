import mongoose from 'mongoose';


const amenitiesSchema = new mongoose.Schema({
    isFreeWifi: { type: Boolean, default: false },
    isAc: { type: Boolean, default: false },
    isTv: { type: Boolean, default: false },
    isGeyser: { type: Boolean, default: false },
    isPowerBackup: { type: Boolean, default: false },
    isDailyHousekeeping: { type: Boolean, default: false },
    isCardPayment: { type: Boolean, default: false },
    isCCTv: { type: Boolean, default: false },
    isPrivateEntrance: { type: Boolean, default: false },
    isAnyTimeCheckout: { type: Boolean, default: false },
    isFireExtinguisher: { type: Boolean, default: false },
    isAttachedBathroom: { type: Boolean, default: false }
});

const roomInventorySchema = new mongoose.Schema({
    roomType: { type: String, required: true }, // e.g., Single, Double, Suite, Duplex
    actualPrice:{type:Number,require:true},
    cheapestPrice:{type:Number,require:true},
    totalRooms: { type: Number, required: true },
    availableRooms: { type: Number, required: true }
});

const hotelSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name:{type: String, require:true},
    type:{type:String, require:true},
    city:{type:String, require:true},
    adress:{type:String, require:true},
    title:{type:String, require:true},
    distance:{type:String, require:true},
    photos:{type:[String]},
    description:{type:String, require:true},
    rating:{type:Number, min:0, max:5},
    rooms: { type: [roomInventorySchema], required: true },
    featured: {type: Boolean, default: false},
    amenities: { type: amenitiesSchema },
})

export default mongoose.model("Hotel", hotelSchema );