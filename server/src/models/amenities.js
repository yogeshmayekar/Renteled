import mongoose from "mongoose";

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

export default mongoose.model('Amenities', amenitiesSchema);

