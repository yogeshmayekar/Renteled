import React, { useContext, useState } from 'react';
import './bookCard.css';
import OfferBookHead from '../offerBookContainer/OfferBookHead';
import { SearchBarContext } from "../../context/searchBarContext";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";

const BookCard = ()=>{
    const {dates} = useContext(SearchBarContext);
    const [date, setDate] = useState(dates);
    const [openDate, setOpenDate] = useState(false);
    const loginContext = useContext(AuthContext);

    const returnDates = (date)=>{
        return `${format(
            date[0].startDate,
            "dd/MM/yyyy"
        )} to ${format(date[0].endDate, "dd/MM/yyyy")}`
    }

    const handleChnagedDates =(item)=>{
        setDate([item.selection]);
    }
    
    // console.log(dates)
    return(
        <>
            <div className='bookCardContainer'>
                {/* offrt head  */}
                {!loginContext.user &&
                    <OfferBookHead/>
                }
                <div className='bookWrap'>

                    <div className='priceWrapper'>
                        <span className='price'>₹1122</span>
                        <span className='markupPrice'><del>₹4717</del></span>
                        <span className='discontOffer'>76% off</span>
                        <p className='taxAndFees'>+ taxes & fees: ₹178</p>
                    </div>

                    <div className='roomDetails'>
                        <div className='dateDetails' onMouseLeave={()=>{setOpenDate(false)}}>
                        <span onClick={() => setOpenDate(!openDate)} >{returnDates(date)}</span>
                            {openDate && (
                                <DateRange
                                onChange={handleChnagedDates}  
                                minDate={new Date()}
                                ranges={date}
                                />
                            )}
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
                        <p className="cancelPolicy">Follow safety measures advised at the hotel</p>
                        <p><span id='lastSpan'>By proceeding, you agree to our </span>Guest Policies.</p>
                    </div>


                </div>
            </div>
        
        </>
    )
}

export default BookCard;