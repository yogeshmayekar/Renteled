import React, { useState } from 'react';

const API_URL = '/api/hotels';

const AddNewProperty = () => {
  const [hotelData, setHotelData] = useState({
    userId: '',
    name: '',
    type: '',
    city: '',
    address: '',
    title: '',
    distance: '',
    photos: [],
    description: '',
    featured: false,
    rooms: [
      {
        roomType: '',
        actualPrice: 0,
        cheapestPrice: 0,
        totalRooms: 0,
        availableRooms: 0,
      },
    ],
    amenities: {
      isFreeWifi: false,
      isAc: false,
      isTv: false,
      isGeyser: false,
      isPowerBackup: false,
      isDailyHousekeeping: false,
      isCardPayment: false,
      isCCTv: false,
      isPrivateEntrance: false,
      isAnyTimeCheckout: false,
      isFireExtinguisher: false,
      isAttachedBathroom: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;
    setHotelData({ ...hotelData, [name]: finalValue });
  };

  const handleRoomChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRooms = hotelData.rooms.map((room, i) =>
      i === index ? { ...room, [name]: value } : room
    );
    setHotelData({ ...hotelData, rooms: updatedRooms });
  };

  const handleAmenityChange = (e) => {
    const { name, checked } = e.target;
    setHotelData({
      ...hotelData,
      amenities: { ...hotelData.amenities, [name]: checked },
    });
  };

  const addRoom = () => {
    setHotelData({
      ...hotelData,
      rooms: [
        ...hotelData.rooms,
        {
          roomType: '',
          actualPrice: 0,
          cheapestPrice: 0,
          totalRooms: 0,
          availableRooms: 0,
        },
      ],
    });
  };

  const removeRoom = (index) => {
    if (hotelData.rooms.length > 1) {
      const updatedRooms = hotelData.rooms.filter((_, i) => i !== index);
      setHotelData({ ...hotelData, rooms: updatedRooms });
    } else {
      alert('At least one room is required.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
      });
      if (response.ok) {
        alert('Hotel added successfully!');
        // Reset form
        setHotelData({
          userId: '',
          name: '',
          type: '',
          city: '',
          address: '',
          title: '',
          distance: '',
          photos: [],
          description: '',
          featured: false,
          rooms: [
            {
              roomType: '',
              actualPrice: 0,
              cheapestPrice: 0,
              totalRooms: 0,
              availableRooms: 0,
            },
          ],
          amenities: {
            isFreeWifi: false,
            isAc: false,
            isTv: false,
            isGeyser: false,
            isPowerBackup: false,
            isDailyHousekeeping: false,
            isCardPayment: false,
            isCCTv: false,
            isPrivateEntrance: false,
            isAnyTimeCheckout: false,
            isFireExtinguisher: false,
            isAttachedBathroom: false,
          },
        });
      } else {
        alert('Failed to add hotel');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="userId"
              value={hotelData.userId}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hotel Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={hotelData.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={hotelData.type}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            >
              <option value="">Select Type</option>
              <option value="Hotel">Hotel</option>
              <option value="Apartment">Apartment</option>
              <option value="Resort">Resort</option>
              <option value="Villa">Villa</option>
              <option value="Cabin">Cabin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={hotelData.city}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={hotelData.address}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={hotelData.title}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Distance <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="distance"
              value={hotelData.distance}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={hotelData.description}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Featured
            </label>
            <input
              type="checkbox"
              name="featured"
              checked={hotelData.featured}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-4">Rooms</h3>
        {hotelData.rooms.map((room, index) => (
          <div key={index} className="mt-2 p-4 bg-gray-50 border rounded-md">
            <h4 className="text-md font-semibold flex justify-between items-center">
              Room {index + 1}
              <button
                type="button"
                onClick={() => removeRoom(index)}
                className={`bg-red-500 text-white p-1 rounded-md text-sm ${
                  hotelData.rooms.length === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={hotelData.rooms.length === 1}
              >
                Remove
              </button>
            </h4>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Room Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="roomType"
                  value={room.roomType}
                  onChange={(e) => handleRoomChange(index, e)}
                  required
                  className="mt-1 p-2 block w-full border rounded-md"
                >
                  <option value="">Select Room Type</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Delux">Delux</option>
                  <option value="Super Delux">Super Delux</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Actual Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="actualPrice"
                  value={room.actualPrice}
                  onChange={(e) => handleRoomChange(index, e)}
                  required
                  className="mt-1 p-2 block w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cheapest Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="cheapestPrice"
                  value={room.cheapestPrice}
                  onChange={(e) => handleRoomChange(index, e)}
                  required
                  className="mt-1 p-2 block w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Rooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="totalRooms"
                  value={room.totalRooms}
                  onChange={(e) => handleRoomChange(index, e)}
                  required
                  className="mt-1 p-2 block w-full border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Available Rooms <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="availableRooms"
                  value={room.availableRooms}
                  onChange={(e) => handleRoomChange(index, e)}
                  required
                  className="mt-1 p-2 block w-full border rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addRoom}
          className="mt-4 bg-blue-500 text-white p-2 rounded-md"
        >
          Add Room
        </button>
        <h3 className="text-lg font-semibold mt-4">Amenities</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(hotelData.amenities).map((amenity) => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                name={amenity}
                checked={hotelData.amenities[amenity]}
                onChange={handleAmenityChange}
                className="mr-2"
              />
              <label className="text-sm font-medium text-gray-700">
                {amenity.replace(/([A-Z])/g, ' $1').trim()}
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewProperty;
