import React, { useEffect, useState } from 'react';
import './bookingHistory.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import hotel from '../../Assets/appartments.jpg';
import axios from 'axios';


function BookingHistory({userId}) {
    const [age, setAge] = React.useState('confirmed');
    const [bookingHotels, setBookingHotels]=useState([]);
    console.log(bookingHotels.length>0);
    console.log(age)

    useEffect(()=>{
        const getBookingDataByUser =async()=>{
            const res =await axios.get(`/booking/get-user-bookings/${userId}`)
            if(res.data.existingBookingByUser){
                setBookingHotels(res.data.existingBookingByUser)
            }
        }

        getBookingDataByUser();

    },[userId])

    const isAnyBooking = bookingHotels.length>0

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  return (
        <div className='booking_Main_Container'>
        {isAnyBooking && <div className='heading_Of_Booking'>
            <h2>Booking History</h2>
            <FormControl sx={{ m: 1, minWidth: 120, width:'120px' }}>
            <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{height:'35px'}}
        >
          <MenuItem value="confirmed">Upcoming</MenuItem>
          <MenuItem value="checkout">Checked out</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
        </Select>
            </FormControl>
        </div>}
        {bookingHotels.filter(data => data.bookingStatus === age).map((data)=>(
            <div className='booking_hotels' key={data.bookingId}>
            <div className='hotel_list_booking'>
            <div className='w4rsd_'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>{data.hotelName}</h2>
                <p>{data.checkinDate} - {data.checkoutDate}</p>
                <p>{data.numberOfGuests} Guests, {data.numberOfRooms} Room</p>
            </div>
            </div>
            <div className='booking__id'>
                <h4>{data.bookingId}</h4>
            </div>
            <div className='final_stat2'>
                 <h4>{data.bookingStatus}</h4>
                 <p>Amount: ₹{data.amount}</p>
                 <p>View Details</p>
            </div>
            </div>
            </div>
        ))}
        </div>
  )
}

export default BookingHistory;