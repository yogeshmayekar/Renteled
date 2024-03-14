import React from 'react';
import './finalbookngcard.css';
import image1 from '../../Assets/h2.avif';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HotelIcon from '@mui/icons-material/Hotel';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';

function FinalBookingCard({
    nightStay,
    roomPrice, 
    taxesAndFees, 
    totalPrice, 
    yourSaving, 
    finalSellingPrice, 
    discountPercentage,
    checkout,
    checkin,
    roomCount,
    guestCount,
    conLoaderData
}) {
    const checkin1 = new Date(checkin)
    const checkout1 = new Date(checkout)
  return (
    <>
    <div className="rightToBook">
    <div className='hotel__details'>
        <div className='hotel__name'>
            <h4>{conLoaderData.name}</h4>
            <p>{nightStay} Night</p>
        </div>
        <div className='image__hotelz'>
            <img src={image1} className='image__act_hotel' alt="hotel room bed" />
        </div>
    </div>
    <div className='priceWrapper'>
        <span className='price'>₹{finalSellingPrice}</span>
        <span className='markupPrice'><del>₹{roomPrice}</del></span> 
        <span className='discontOffer'>{discountPercentage}% off</span>
        <p className='taxAndFees'>+ taxes & fees: ₹{ taxesAndFees }</p>
    </div>
    <div className='final__dates'>
     <span><DateRangeIcon/><p className='date_rr'>{checkin1.toDateString().split('2024')} to {checkout1.toDateString().split('2024')}</p></span>
    </div>
    <div className='final__dates'>
    <span><HotelIcon/><p className='date_rr'> {roomCount} Rooms, {guestCount} Guests</p></span>
    </div>
    <div className='final__dates'>
    <span><DoorFrontOutlinedIcon/><p className='date_rr'> Classic</p></span>
    </div>

    <div className='dottedLines'></div>

    <div className='hotelsFees'>
        <span>Room Price</span>
        <span>₹{roomPrice}</span>
    </div>
                                        
    <div className='taxesAndFees'>
        <span>Your savings</span>
        <span>₹{yourSaving}</span>
    </div>

    <div className='taxesAndFees'>
        <span>Taxes & fees</span>
        <span>₹{taxesAndFees}</span>
    </div>

    <div className='totalPrice'>
        <div className='finalPrice'>
        <span>Payable Amount</span>
        <span className='boltt' >₹{totalPrice}</span>
        </div>
        <p>Including taxes & fees</p>
    </div>

    
    </div>
    </>
  )
}

export default FinalBookingCard