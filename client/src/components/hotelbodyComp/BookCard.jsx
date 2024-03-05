import React, { useContext, useState,useEffect, useRef } from 'react';
import './bookCard.css';
import OfferBookHead from '../offerBookContainer/OfferBookHead';
import { SearchBarContext } from "../../context/searchBarContext";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";
import { Link } from 'react-router-dom';
import PriceWrapper from '../priceWrapper/PriceWrapper';

const BookCard = ({setSefetyMeasure, earlyLoaderData, checkIn, checkOut, destination})=>{
    // console.log(earlyLoaderData)
    const { options, dates,  dispatch44} = useContext(SearchBarContext);
    const [openOptions, setOpenOptions] = useState(false);
    const destination2 = destination;
    const [dates2, setDates2] = useState([{
        startDate: new Date(checkIn),
        endDate: new Date(checkOut),
        key: 'selection'
      }
    ] || dates);
    const [options2, setOptions2] = useState(JSON.parse(localStorage.getItem('userOptions')) || options);
    const [openDate, setOpenDate] = useState(false);
    const loginContext = useContext(AuthContext);
    const searchDateRef = useRef(null);
    const searchOpenRef = useRef(null);

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

    const getSum = () => {
        const sum = Object.values(options2).reduce((acc, value) => acc + value, 0);
        return sum;
    };

    const removeGuest =(roomNo, guests)=>{
        if(guests>=2){
          setOptions2((prevGuestCount) => ({
            ...prevGuestCount,
            [roomNo]: prevGuestCount[roomNo] - 1,
          }));
        }
    }

    const addGuest=(roomNo, guests)=>{
        if(guests<=2){
          setOptions2((prevGuestCount) => ({
            ...prevGuestCount,
            [roomNo]: prevGuestCount[roomNo] + 1,
          }));
        }
        
    }

    const removeRoom=()=>{
        const keys = Object.keys(options2);
  
        if (keys.length >= 2) {
        const lastKey = keys[keys.length - 1];
  
        const updatedObject = { ...options2 };
        delete updatedObject[lastKey];
  
        setOptions2(updatedObject);
      }
    }

    const addNewRoom = ()=>{
        const newRoomName = `Room ${Object.keys(options2).length + 1}`;
          setOptions2((prevGuestCount) => ({
            ...prevGuestCount,
            [newRoomName]: 1,
          }));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (searchOpenRef.current && !searchOpenRef.current.contains(event.target)) {
            setOpenOptions(false);
          }
        };
    
        const handleDocumentClick = (event) => {
          handleClickOutside(event);
        };
    
        document.addEventListener('mousedown', handleDocumentClick);
    
        return () => {
          document.removeEventListener('mousedown', handleDocumentClick);
        };
      }, [searchOpenRef, setOpenOptions]);

    const handleDateChange=(item)=>{
        setDates2([item.selection])
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

      const handleContinueToBook =()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
        localStorage.setItem('userDates', JSON.stringify(dates2));
        localStorage.setItem('userOptions', JSON.stringify(options2));
    }

    useEffect(()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
    },[dates2, options2])
    
    // console.log(dates)
    return(
        <>
            <div className='bookCardContainer'>
                {/* offrt head  */}
                {!loginContext.user &&
                    <OfferBookHead/>
                }
                <div className='bookWrap'>
                    {/* <PriceWrapper smallvarient={false} data={earlyLoaderData} /> */}

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
                        <div  className='roomDeta' onClick={()=>setOpenOptions(true)} ref={searchOpenRef}>
                                <span className="headerSearchText2"><span className='sp1'>{ getSum() }</span> Guests - <span className='sp1'>{Object.keys(options2).length}</span> Room </span>
                                {openOptions && 
                                <div className="options3">
                                <div className="optionHeading"> 
                                    <div>Rooms</div>
                                    <div>Guests</div>
                                </div>
                                {Object.entries(options2).map(([roomNo, guests]) => (               
                                <div className="optionsItem" style={{margin:"0",width:'80%',padding:"3px 10%", display:"flex", justifyContent:"space-between"}} key={roomNo}>
                                <span className="optionText">{roomNo}</span>
                                <div className="optionCounter">
                                    <button className='optionCounterBtn'  onClick={()=>removeGuest(roomNo, guests)}>-</button>              
                                    <p className="optionCounterNum" >{guests}</p>
                                    <button className='optionCounterBtn'  onClick={()=>addGuest(roomNo, guests)} >+</button>
                                </div>
                                </div>))}
                                <div className="addHotelContainer" >
                                <div className="deleteHotel" onClick={removeRoom} style={{ color: Object.keys(options2).length>=2 ? 'rgb(52, 40, 40)' : 'inherit' }} >
                                    Delete Room
                                </div>
                                <div className="addHotel" onClick={addNewRoom} >
                                    Add Room
                                </div>
                                </div> 
                                </div>}
                        </div>
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
                        <button onClick={handleContinueToBook}>Continue to Book</button>
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