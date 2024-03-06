import React from 'react';
import Navbar2 from '../../components/navbar/Navbar2';
import './continueToBook.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import LooksOneIcon from '@mui/icons-material/LooksOne';

function ContinueToBook() {
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
            <p>💐Yay! you just saved ₹4339 on this booking!</p>
          </div>
          <div className='enterDetails'>
            <div>
              <LooksOneIcon/>
              <h2>Enter your details</h2>
            </div>
            <p>We will use these details to share your booking information</p>
            <div className='oneWrapper'>
              <div className="chield__Edit" >
                <label>Full Name</label>
                <p>yogesh mayekar</p>
              </div>
              <div className="chield__Edit" >
                <label>Email Address</label>
                <p>yogesh.mayekar09@gmail.com</p>
              </div>
            </div>
            <div className="chield__Edit" >
                <label>Mobile Number</label>
                <p>7411805513</p>
              </div>
              <button>Continue</button>
          </div>

        </div>
        <div className="rightToBook">

        </div>

    </div>
    </div>
    </>
  )
}

export default ContinueToBook;