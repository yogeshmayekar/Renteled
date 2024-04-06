import React from 'react';
import Navbar from '../../components/navbar/Navbar2';
import './booking.css';
import hotel from '../../Assets/appartments.jpg';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';


function Booking() {
    const params = useParams();
    const {booking_id} = params;
    const { data, loading, error } =  useFetch(`/booking/find/${booking_id}`);
    console.log(error)
    console.log(data.bookingById)
  return (
    <>
    <Navbar/>
    <div className='confirm__booking_container'>
        <div className='first_item'>
            <h3>Great! Your stay is confirmed.</h3>
            <p>You will soon recive an email confirmation on yogesh.mayekar09@gmail.com</p>
        </div>  
        <div className='bookingId_details'>
            <div className='first_content'>
                <div className='herfa'>
                    <h3>Booking Id</h3>
                    <p>FDTU1923</p>
                </div>
                <p>Booked by yogesh on 15 May 2024</p>
            </div>
            <div className='booking_hotels'>
            <div className='hotel_list_booking2'>
            <div className='w4rsd_'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>Capital O Sweven Stays</h2>
                <p>Apr 30, 2019 - May 1, 2019</p>
                <p>3 Guests, 1 Room</p>
            </div>
            </div>
            <div className='final_stat f5zf'>
                 <h4>Checked Out</h4>
                 <div className='pay__now def'>
                  <button>Pay Now</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default Booking;

