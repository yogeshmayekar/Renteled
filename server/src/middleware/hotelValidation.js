import Joi from 'joi';

const amenitiesSchema = Joi.object({
    isFreeWifi: Joi.boolean().default(false),
    isAc: Joi.boolean().default(false),
    isTv: Joi.boolean().default(false),
    isGeyser: Joi.boolean().default(false),
    isPowerBackup: Joi.boolean().default(false),
    isDailyHousekeeping: Joi.boolean().default(false),
    isCardPayment: Joi.boolean().default(false),
    isCCTv: Joi.boolean().default(false),
    isPrivateEntrance: Joi.boolean().default(false),
    isAnyTimeCheckout: Joi.boolean().default(false),
    isFireExtinguisher: Joi.boolean().default(false),
    isAttachedBathroom: Joi.boolean().default(false)
});

const roomInventorySchema = Joi.object({
    roomType: Joi.string().valid('Single', 'Double', 'Suite').required(),
    actualPrice: Joi.number().min(0).required(),
    cheapestPrice: Joi.number().min(0).required(),
    totalRooms: Joi.number().min(1).required(),
    availableRooms: Joi.number().min(0).max(Joi.ref('totalRooms')).required()
});

const updateRoomSchema = Joi.object({
    actualPrice: Joi.number().min(0),
    cheapestPrice: Joi.number().min(0),
    totalRooms: Joi.number().min(1),
    availableRooms: Joi.number().min(0)
}).min(1);

const hotelSchema = Joi.object({
    userId: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    city: Joi.string().required(),
    adress: Joi.string().required(),
    title: Joi.string().required(),
    distance: Joi.string().required(),
    photos: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    rating: Joi.number().min(0).max(5),
    rooms: Joi.array().items(roomInventorySchema).required(),
    featured: Joi.boolean().default(false),
    amenities: amenitiesSchema.required()
});

export const validateHotel = (req, res, next) => {
    const { error } = hotelSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

export const validateRoom = (req, res, next)=>{
    const { error } = roomInventorySchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
}

export const validateUpdateRoom = (req, res, next)=>{
    const { error } = updateRoomSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
}