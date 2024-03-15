import React, { useState, useContext, useEffect } from 'react';
import Navbar2 from '../../components/navbar/Navbar2';
import './continueToBook.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import { PriceContext } from '../../context/priceContext';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { useLoaderData } from 'react-router-dom';
import FinalBookingCard from '../../components/finalBookingCard/FinalBookingCard';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function ContinueToBook() {
  const [isPayNow, setIsPayNow] = useState(false);
  const {checkin, checkout, roomCount, guestCount }= useParams()
  const conLoaderData = useLoaderData()
  const {roomPricez, yourSavingz, taxesAndFeesz, totalPricez, nightStayz, finalSellingPricez, discountPercentagez}= useContext(PriceContext);
  const handlePayNow=()=>{
    setIsPayNow(true)
  }
  const {user} = useContext(AuthContext)
  const handlePatAtHotel =()=>{
    setIsPayNow(false)

  }

  const { data, loading, error }= useFetch(
    `/users/${user._id}`
  )
  console.log("userData is", data)
  // console.log("userData is", error)
  
  const navigate = useNavigate();

  const [bookingName, setBookingName]=useState("");
  const [bookingEmail, setBookingEmail]=useState("");
  const [bookingNumber, setBookingNumber]=useState("");
  const [isPhoneVerified, setIsPhoneVerified]= useState(false);
  const [isAllBookingData, setIsAllBookingData]=useState(false);
  useEffect(()=>{
    if(data){
      setBookingName(data.username);
    setBookingEmail(data.email);
    if(data.phoneNumber){
      setBookingNumber(data.phoneNumber);
    }
    
    if(data.isPhoneVerified){
      setIsPhoneVerified(true);
    }
    }
  },[data])

  const handleNameChange=(e)=>{
    setBookingName(e.target.value)
    e.preventDefault();
  }

  const handleEmailChange=(e)=>{
    setBookingEmail(e.target.value);
    e.preventDefault()
  }

  const handlePhoneChange=(e)=>{
    setBookingNumber(e.target.value);
    e.preventDefault();
  }

  useEffect(()=>{
    if(bookingNumber===data.phoneNumber){
      setIsPhoneVerified(true);
    }else{
      setIsPhoneVerified(false);
    }
  },[bookingNumber])

  const handleFinalContinue=(e)=>{
    setIsAllBookingData(true)
    e.preventDefault();
  }

  const handleModify=(e)=>{
    setIsAllBookingData(false)
    e.preventDefault()
  }

  return (
    <>
    <Navbar2/>
    <div className='continueToBook1'>
      <div className='chieldway'>
        <KeyboardBackspaceIcon className="back__icon" style={{fontSize:"40px"}} onClick={() => navigate(-1)} />
        <h2 onClick={() => navigate(-1)}>Modify your booking</h2>
      </div>
    </div>
    <div className='continueToBook2'>
    <div className='continueToBook__Container'>
        <div className="leftToBook">
          <div className='congroMessage'>
            <p>🎉 Yay! you just saved ₹{yourSavingz} on this booking!</p>
          </div>
          {!isAllBookingData &&<div className='enterDetails'>
            <div className='enrty__details'>
              <LooksOneIcon  sx={{fontSize:'28px'}}/>
              <h2>Enter your details</h2>
            </div>
            <p>We will use these details to share your booking information</p>
            <div className='oneWrapper'>
              <div className="chield__Edit" >
                <label>Full Name</label>
                <p><TextField hiddenLabel id="filled-hidden-label-small" value={bookingName} onChange={handleNameChange} size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p>
              </div>
              <div className="chield__Edit2" >
                <label>Email Address</label>
                <p><TextField hiddenLabel id="filled-hidden-label-small" value={bookingEmail} onChange={handleEmailChange}  size="small" sx={{height:'20px', width:'280px', mb:2, outline:'none' }} /></p>
                <span className='verifies_clas'><CheckCircleOutlineOutlinedIcon sx={{fontSize:'16px'}} /><p>Verified</p></span>
              </div>
            </div>
            <div className="chield__Edit" >
                <label>Mobile Number</label>
                <p><TextField hiddenLabel id="filled-hidden-label" type='text' value={bookingNumber} onChange={handlePhoneChange} size="small" sx={{height:'20px', width:'280px', mb:2}} /></p>
                {isPhoneVerified &&<span className='verifies_clas'><CheckCircleOutlineOutlinedIcon sx={{fontSize:'16px'}} /><p>Verified</p></span>}
              </div>
              <button className='final_continue' onClick={handleFinalContinue}>Continue</button>
          </div>}

          {isAllBookingData && <>
            <div className='enterDetails'>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div className='enrty__details'>
                <LooksOneIcon  sx={{fontSize:'28px'}}/>
                <h2>Your details</h2>
              </div>
              <button className='modify__Button' onClick={handleModify} >Modify</button>
            </div>
            <div className='final_bDetails'>
              <span>{bookingName}</span>
              <span>|</span>
              <span>{bookingEmail}</span>
              <span>|</span>
              <span>{bookingNumber}</span>
            </div>
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
          </>}

        </div>
        {/* <div className="leftToBook"> */}
        <FinalBookingCard 
        checkin={checkin} 
        checkout={checkout} 
        roomCount={roomCount} 
        guestCount={guestCount}
        nightStay={nightStayz}
        roomPrice={roomPricez}
        taxesAndFees={taxesAndFeesz}
        totalPrice={totalPricez}
        yourSaving={yourSavingz}
        finalSellingPrice={finalSellingPricez}
        discountPercentage={discountPercentagez}
        conLoaderData={conLoaderData}
        />
        {/* </div> */}

    </div>
    </div>
    </>
  )
}

export default ContinueToBook;

export const handleContinueToBookLoader = async({ params }) =>{
  // console.log(params.id);
  const id = params.id;
  const hotelID = id.slice(22, 46);
  const res = await axios.get(`/hotels/find/${hotelID}`);
  // console.log(res.status)
  if(res.status === !200){
      throw new Response('Not Found', {status: 404})
  }
  // console.log(res.data)
  return res.data
}