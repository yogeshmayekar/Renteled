import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar2';
import './booking.css';
import hotel from '../../Assets/appartments.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Booking=()=>{
    const [bookingData, setBookingData] = useState({});
    const params = useParams();
    const {booking_id} = params;

    useEffect(()=>{
        const getData= async()=>{
            const res = await axios.get(`/booking/find/${booking_id}`)
            // console.log()
            setBookingData(res.data.bookingById)
        }
        getData()
    },[booking_id])

  return (
    <>
    <Navbar/>
    <div className='confirm__booking_container'>
        <div className='first_item'>
            <h3>Great! Your stay is confirmed.</h3>
            <p>You will soon recive an email confirmation on {bookingData?.bookingEmailId}</p>
        </div>  
        <div className='bookingId_details'>
            <div className='first_content'>
                <div className='herfa'>
                    <h3>Booking Id</h3>
                    <p>{bookingData.bookingId}</p>
                </div>
                {bookingData.createdAt &&<p>Booked by {bookingData?.bookedByName} on {bookingData.createdAt.slice(0, 10)}</p>}
            </div>
            <div className='booking_hotels'>
            <div className='hotel_list_booking2'>
            <div className='w4rsd_2'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>{bookingData?.hotelName}</h2>
                {bookingData.checkinDate && bookingData.checkoutDate && 
                <p>{bookingData.checkinDate.slice(0, 15)} - {bookingData.checkoutDate.slice(0, 15)}</p>}
                <p>{bookingData.numberOfGuests} Guests, {bookingData.numberOfRooms} Room</p>
            </div>
            </div>
            <div className='final_stat f5zf'>
                <h4 style={{margin:'0'}}>Booking Status</h4>
                 <h4>{bookingData?.bookingStatus}</h4>
                 {bookingData?.paymentStatus==='pending' &&<div className='pay__now def' >
                  <button style={{marginTop:'25px'}}>Pay Now</button>
                </div>}
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default Booking;

