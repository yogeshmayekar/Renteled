import React from 'react';
import './bookingHistory.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import hotel from '../../Assets/appartments.jpg';


function BookingHistory() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className='booking_Main_Container'>
        <div className='heading_Of_Booking'>
            <h2>Booking History</h2>
            <FormControl sx={{ m: 1, minWidth: 120, width:'120px' }}>
            <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{height:'35px'}}
        >
          <MenuItem value="">Upcoming</MenuItem>
          <MenuItem value={10}>Checked out</MenuItem>
          <MenuItem value={20}>Cancelled</MenuItem>
        </Select>
            </FormControl>
        </div>
        <div className='booking_hotels'>
            <div className='hotel_list_booking'>
            <div className='w4rsd_'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>Capital O Sweven Stays</h2>
                <p>Apr 30, 2019 - May 1, 2019</p>
                <p>3 Guests, 1 Room</p>
            </div>
            </div>
            <div className='booking__id'>
                <h4>GEON5986</h4>
            </div>
            <div className='final_stat'>
                 <h4>Checked Out</h4>
                 <p>Amount: ₹1799</p>
                 <p>View Details</p>
            </div>
            </div>
        </div>
        <div className='booking_hotels'>
            <div className='hotel_list_booking'>
            <div className='w4rsd_'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>Capital O Sweven Stays</h2>
                <p>Apr 30, 2019 - May 1, 2019</p>
                <p>3 Guests, 1 Room</p>
            </div>
            </div>
            <div className='booking__id'>
                <h4>GEON5986</h4>
            </div>
            <div className='final_stat'>
                 <h4>Checked Out</h4>
                 <p>Amount: ₹1799</p>
                 <p>View Details</p>
            </div>
            </div>
        </div>
        <div className='booking_hotels'>
            <div className='hotel_list_booking'>
            <div className='w4rsd_'>
            <img src={hotel} alt="hotel view" />
            <div className='details_of_hotel'>
                <h2>Capital O Sweven Stays</h2>
                <p>Apr 30, 2019 - May 1, 2019</p>
                <p>3 Guests, 1 Room</p>
            </div>
            </div>
            <div className='booking__id'>
                <h4>GEON5986</h4>
            </div>
            <div className='final_stat'>
                 <h4>Checked Out</h4>
                 <p>Amount: ₹1799</p>
                 <p>View Details</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BookingHistory;