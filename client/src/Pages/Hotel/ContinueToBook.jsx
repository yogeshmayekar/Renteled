import React, { useState } from 'react';
import Navbar2 from '../../components/navbar/Navbar2';
import './continueToBook.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ContinueToBook() {
  const [isPayNow, setIsPayNow] = useState(false);

  const handlePayNow=()=>{
    setIsPayNow(true)
  }

  const handlePatAtHotel =()=>{
    setIsPayNow(false)

  }
  
  const navigate = useNavigate();
  return (
    <>
    <Navbar2/>
    <div className='continueToBook1'>
      <div className='chieldway'>
        <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px"}} onClick={() => navigate(-1)} />
        <h2 onClick={() => navigate(-1)}>Modify your booking</h2>
      </div>
    </div>
    <div className='continueToBook'>
    <div className='continueToBook__Container'>
        <div className="leftToBook">
          <div className='congroMessage'>
            <p>🎉 Yay! you just saved ₹4339 on this booking!</p>
          </div>
          <div className='enterDetails'>
            <div className='enrty__details'>
              <LooksOneIcon  sx={{fontSize:'28px'}}/>
              <h2>Enter your details</h2>
            </div>
            <p>We will use these details to share your booking information</p>
            <div className='oneWrapper'>
              <div className="chield__Edit" >
                <label>Full Name</label>
                <p><TextField hiddenLabel id="filled-hidden-label-small" defaultValue="Yogesh Mayekar"  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p>
              </div>
              <div className="chield__Edit2" >
                <label>Email Address</label>
                <p><TextField hiddenLabel id="filled-hidden-label-small" defaultValue=""  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p>
                <span className='verifies_clas'><CheckCircleOutlineOutlinedIcon sx={{fontSize:'16px'}} /><p>Verified</p></span>
              </div>
            </div>
            <div className="chield__Edit" >
                <label>Mobile Number</label>
                <p><TextField hiddenLabel id="filled-hidden-label" type='text' value="" defaultValue="7411805513"  size="small" sx={{height:'20px', width:'280px', mb:2}} /></p>
                <span className='verifies_clas'><CheckCircleOutlineOutlinedIcon sx={{fontSize:'16px'}} /><p>Verified</p></span>
              </div>
              <button className='final_continue'>Continue</button>
          </div>

          <div className='enterPayment__method'>
            <h2>Choose payment method to pay</h2>
            <div className='sub__payment'>
              <div className='sub_left_pay'>
                <div className={isPayNow ? 'pay__now def' :'pay__now'}>
                  <button onClick={handlePayNow}>Pay Now</button>
                </div>
                <div className={isPayNow ? 'pay__hotel': 'pay__hotel def'}>
                  <button onClick={handlePatAtHotel} >Pay At Hotel</button>
                </div>
              </div>
              <div className='sub_right_pay '>
                <div className='sub_right_pay_chield '>
                <h4>No payment needed today</h4>
                <p>We will confirm your stay without any charge. Pay directly at the hotel during your stay.</p>
                <button>Book Now</button>
                </div>
                
              </div>

            </div>

          </div>

        </div>
        <div className="leftToBook">

        </div>

    </div>
    </div>
    </>
  )
}

export default ContinueToBook;