import Hotel from "../models/hotels.js";

export const addNewRoom = async(req, res, next)=>{
    const { hotelId } = req.params;
    const newRoom = req.body;

    try {
        const hotel = await Hotel.findByIdAndUpdate(
            hotelId,
            { $push: { rooms: newRoom } },
            { new: true, runValidators: true }
        );

        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }

        res.status(200).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }

}

export const removeRoom = async(req, res, next)=>{
    const { hotelId, roomId } = req.params;

    try {
        const hotel = await Hotel.findByIdAndUpdate(
            hotelId,
            { $pull: { rooms: { _id: roomId } } },
            { new: true }
        );

        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }

        res.status(200).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const updateRoom =async (req, res, next)=>{
    const { hotelId, roomId } = req.params;
    const { roomType } = req.body; 

    try {
        const update = { $set: {} };

        if (req.body.actualPrice) {
            update.$set['rooms.$.actualPrice'] = req.body.actualPrice;
        }
        if (req.body.cheapestPrice) {
            update.$set['rooms.$.cheapestPrice'] = req.body.cheapestPrice;
        }
        if (req.body.totalRooms) {
            update.$set['rooms.$.totalRooms'] = req.body.totalRooms;
        }
        if (req.body.availableRooms) {
            update.$set['rooms.$.availableRooms'] = req.body.availableRooms;
        }

        const hotel = await Hotel.findOneAndUpdate(
            { _id: hotelId, 'rooms._id': roomId, 'rooms.roomType': roomType },
            update,
            { new: true }
        );

        if (!hotel) {
            return res.status(404).send({ message: 'Hotel or Room not found' });
        }

        res.status(200).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }

}

// get single room 
export const getRoom = async (req, res, next) => {
    const { hotelId, roomId } = req.params;
    try {
        const hotel = await Hotel.findOne(
            { _id: hotelId, 'rooms._id': roomId },
            { 'rooms.$': 1 } // Projection to select only the matched room
        );

        if (!hotel) {
            return res.status(404).send({ message: 'Hotel or Room not found' });
        }

        const room = hotel.rooms.find(room => room._id.toString() === roomId);
        res.status(200).send(room);
    } catch (error) {
        res.status(400).send(error);
    }
};

//get all rooms
export const getRooms = async (req, res, next) => {
    const { hotelId } = req.params;

    try {
        const hotel = await Hotel.findById(hotelId);

        if (!hotel) {
            return res.status(404).send({ message: 'Hotel not found' });
        }

        res.status(200).send(hotel.rooms);
    } catch (error) {
        res.status(400).send(error);
    }
};