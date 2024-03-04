import React, { useContext, useState,useEffect, useRef } from 'react';
import './bookCard.css';
import OfferBookHead from '../offerBookContainer/OfferBookHead';
import { SearchBarContext } from "../../context/searchBarContext";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";
import { Link } from 'react-router-dom';
import PriceWrapper from '../priceWrapper/PriceWrapper';

const BookCard = ({setSefetyMeasure})=>{
    const {destination, dates, options, dispatch44} = useContext(SearchBarContext);
    const [dates2, setDates2] = useState(dates);
    const [openDate, setOpenDate] = useState(false);
    const loginContext = useContext(AuthContext);
    const searchDateRef = useRef(null);

    const customTheme={
        rdrMonth :{
          width: "300px"
        }
    }

    // const returnDates = (dates2)=>{
    //     return `${format(
    //         dates2[0].startDate,
    //         "dd/MM/yyyy"
    //     )} to ${format(dates2[0].endDate, "dd/MM/yyyy")}`
    // }

    const handleDateChange=(item)=>{
        setDates2([item.selection])
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination, dates2, options }});
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchDateRef.current && !searchDateRef.current.contains(event.target)) {
            setOpenDate(false);
          }
        };
    
        const handleDocumentClick = (event) => {
          handleClickOutside(event);
        };
    
        document.addEventListener('mousedown', handleDocumentClick);
    
        return () => {
          document.removeEventListener('mousedown', handleDocumentClick);
        };
      }, [searchDateRef, setOpenDate]);
    
    // console.log(dates)
    return(
        <>
            <div className='bookCardContainer'>
                {/* offrt head  */}
                {!loginContext.user &&
                    <OfferBookHead/>
                }
                <div className='bookWrap'>
                    <PriceWrapper/>

                    <div className='roomDetails'>
                        <div className='dateDetails' ref={searchDateRef}>
                        <span onClick={() => setOpenDate(!openDate)} >{`${format(dates2[0].startDate, "dd/MM/yyyy")} to ${format(dates2[0].endDate, "dd/MM/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item)=>handleDateChange(item)}
                            moveRangeOnFirstSelection={false}
                            ranges={dates2}
                            className='date3'
                            theme={customTheme} 
                            minDate={new Date()}
                            />}
                        </div>
                        <div  className='roomDeta'>dates goes here</div>
                        <div className='classic'><span>Classic</span></div>
                    </div>

                    <div className='dottedLines'></div>

                    <div className='hotelsFees'>
                        <span>Room Price</span>
                        <span>₹1620</span>
                    </div>
                    
                    <div className='taxesAndFees'>
                        <span>Taxes & fees</span>
                        <span>₹1620</span>
                    </div>

                    <div className='totalPrice'>
                        <div className='finalPrice'>
                            <span>Total price</span>
                            <span>₹1620</span>
                        </div>
                            <p>Including taxes & fees</p>
                    </div>

                    <div className='continueToBook'>
                        <button>Continue to Book</button>
                    </div>

                    <div className='policyBook'>
                        <p className="cancelPolicy">Cancellation Policy</p>
                        <p className="cancelPolicy" onClick={()=>setSefetyMeasure(true)}>Follow safety measures advised at the hotel</p>
                        <p><span id='lastSpan'>By proceeding, you agree to our </span><Link to="/guest-policy/" target="_blank" style={{textDecoration:'none', color:'rgb(219, 91, 36)'}} >Guest Policies.</Link></p>
                    </div>


                </div>
            </div>
        
        </>
    )
}

export default BookCard;