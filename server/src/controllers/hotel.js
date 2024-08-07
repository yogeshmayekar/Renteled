import Hotel from "../models/hotels.js";
import CustomErrorHandler from "../utils/error.js";


// logic of the create new hotel 
export const createHotel = async(req, res, next)=>{
    const newHotels = new Hotel(req.body)

    try{ 
        const saveHotel = await newHotels.save()
        res.status(200).json(saveHotel);
    }catch(err){
        return next(CustomErrorHandler.unableToCreateHotel("Unable to create hotel right now, please try after some time")) // handle error here
    }
}

// logic for update hotels 
export const updateHotel = async(req, res, next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(res.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updateHotel);
    }catch(err){
        return next(CustomErrorHandler.unableToUpdateHotel("Unable to update hotel details right now, please try after some time"))
    }

}

// logic for the delete hotels 
export const deleteHotel = async(req, res, next)=>{
    try{
        await Hotel.findByIdAndDelete(res.params.id, {$set:req.body}, {new:true})
        res.status(200).json("hotel has been deleted");
    }catch(err){
        return next(CustomErrorHandler.unableToDeleteHotel("cant delete hotel right now, please try after some time."))
    }
}

// logic of the get hotel 
export const getHotel = async(req, res, next)=>{
    try{
      // console.log(req.params.id)
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        return next(CustomErrorHandler.unableToFetchHotel("Unable to get hotel details right now, please try after some time."))
    }
}

// logic of the get all hotels 
export const getAllHotels = async (req, res, next) => {
  const search = req.query.search;
  // console.log(typeof search);

  try {
    const hotels = await Hotel.find();

    const searchParts = search.toLowerCase().split(',').map(part => part.trim());

    const filteredHotels = hotels.filter((hotel) => {
      const hotelNameLower = hotel.name.toLowerCase();
      const hotelCityLower = hotel.city.toLowerCase();

     
      return searchParts.some(part => 
        hotelNameLower.includes(part) || hotelCityLower.includes(part)
      );
    });

    const remainingHotels = hotels.filter((hotel) => {
      const hotelNameLower = hotel.name.toLowerCase();
      const hotelCityLower = hotel.city.toLowerCase();

    
      return !searchParts.some(part => 
        hotelNameLower.includes(part) || hotelCityLower.includes(part)
      );
    });

    const combinedHotels = [...filteredHotels, ...remainingHotels];

    res.status(200).json(combinedHotels);
  } catch (err) {
    return next(
      CustomErrorHandler.unableToFetchHotel("Unable to fetch hotels, please try after some time.")
    );
  }
};


// count by city 
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      res.status(400).json({message:'try after some time'})
    }
};

export const countByHotelType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      res.status(400).json({message:'try after some time'})
    }
};

export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
};

export const getHotelForAdmin = async(req, res, next)=>{
  try {
    const hotelForAdmin = await Hotel.find({userId:req.params.userId});
    res.status(200).json(hotelForAdmin)
  } catch (err) {
    res.status(400).json({message:'try after some time'})
  }
} 
