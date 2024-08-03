import express from 'express';
const router = express.Router();
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel, countByCity, countByHotelType, getHotelRooms, getHotelForAdmin} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/jwtservice.js';
import { validateHotel, validateRoom, validateUpdateRoom} from '../middleware/hotelValidation.js';
import { addNewRoom, removeRoom, updateRoom, getRoom, getRooms } from '../controllers/rooms.js';

// 1.1 Functional Api 
//create hotel api
router.post("/",verifyAdmin, validateHotel, createHotel);

//Update hotels api
router.put("/:id",verifyAdmin, updateHotel);

//delete hotel api
router.delete("/:id",verifyAdmin, deleteHotel);

//get hotel api
router.get("/find/:id", getHotel);

//get hotel by user id
router.get("/find/admin_hotel/:userId",verifyAdmin, getHotelForAdmin);

//get all hotels api
router.get("/", getAllHotels)

// 1.2 Non-Functional Api

// number of count city api 
router.get("/countByCity", countByCity);

// hotels count by hotel type api 
router.get("/countByType", countByHotelType);

// get hotel rooms api linked with hotel api
router.get("/room/:id", getHotelRooms); 

// 1.3 Room functional Api

// add new room 
router.post('/:hotelId/rooms', verifyAdmin, validateRoom, addNewRoom);

//to remove room
router.delete('/:hotelId/rooms/:roomId', verifyAdmin, removeRoom);

//to update the room details
router.put('/:hotelId/rooms/:roomId',verifyAdmin, validateUpdateRoom, updateRoom);

// get single room api 
router.get("/:hotelId/rooms/:roomId", getRoom);

//get all room api
router.get("/:hotelId/rooms", getRooms);

export default router;