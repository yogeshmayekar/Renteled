import React, { useContext, useState, useEffect, useRef } from 'react';
import './bookCard.css';
import OfferBookHead from '../offerBookContainer/OfferBookHead';
import { SearchBarContext } from "../../context/searchBarContext";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from 'react-router-dom';
import { PriceContext } from '../../context/priceContext';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CancelationPolicy from '../cancelationPolicy/CancelationPolicy';
// import PriceWrapper from '../priceWrapper/PriceWrapper';

const BookCard = ({setSefetyMeasure, earlyLoaderData, checkIn, checkOut, destination, hotelID})=>{
   
    // console.log(earlyLoaderData._id, "hear");
    const randomNumberOne = Math.floor(Math.random() * 900000) + 100000;
    const randomNumberTwo = Math.floor(Math.random() * 9000) + 1000;
    const { options, dates,  dispatch44} = useContext(SearchBarContext);
    const { dispatch55}= useContext(PriceContext);
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
    const [stayNights, setStayNights] =useState(1);
    const [totalNumberOfRooms, setTotalNumberOfRooms]=useState(1);
    const [discountPercentage, setDiscountPercentage]= useState(1);
    const [discountedPrice, setDiscountedPrice]= useState(1);
    const [disableContinue, setDisableContinue]= useState(false);
    const [openCancelationPolicy, setOpenCancelationPolicy]= useState(false)
    const loginContext = useContext(AuthContext);
    const searchDateRef = useRef(null);
    const searchOpenRef = useRef(null);
    const navigate = useNavigate()

    const customTheme={
        rdrMonth :{
          width: "300px"
        }
    }


    useEffect(()=>{
      const detDesableHandle =()=>{
        if(!loginContext.user){
          setDisableContinue(true)
        }
      }
      detDesableHandle()
    },[disableContinue, loginContext])

    // useEffect(()=>{
    //   dispatch44({type:"NEW_UPDATE_SEARCH", payload:{destination2, dates2, options2}})
    // },[checkIn, checkOut])

    // const returnDates = (dates2)=>{
    //     return `${format(
    //         dates2[0].startDate,
    //         "dd/MM/yyyy"
    //     )} to ${format(dates2[0].endDate, "dd/MM/yyyy")}`
    // }

    const handleMouseEnter = () => {
      setOpenCancelationPolicy(true);
    };
  
    const handleMouseLeave = () => {
      setOpenCancelationPolicy(false);
    };

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

    useEffect(()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
        localStorage.setItem('userDates', JSON.stringify(dates2));
        localStorage.setItem('userOptions', JSON.stringify(options2));
    },[dates2, options2])



    // calculate the total price of the room
    useEffect(()=>{
      const markedPrice = Number(earlyLoaderData.actualPrice);
      const discontedPrice = Number(earlyLoaderData.cheapestPrice);
      const percentageDiff = ((markedPrice - discontedPrice) / markedPrice) * 100;
       //to calculate the GST
    const taxAmountCalculator = (discontedPrice)=>{
      if(discontedPrice < 2500 ){
          // console.log("12%")
          return discontedPrice * 0.12
      }else if( discontedPrice <= 5000){
          // console.log("18%")
          return discontedPrice * 0.18
      }else{
          // console.log("28%")
          return discontedPrice * 0.28
      }
    }

    setDiscountedPrice(taxAmountCalculator(discontedPrice).toFixed(0))


      const start = new Date(dates2[0].startDate);
      const end = new Date(dates2[0].endDate);
      const differenceInMs = Math.abs(end - start);
      const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
      const numberOfRooms = Object.keys(options2).length;
      setTotalNumberOfRooms(numberOfRooms);
      setStayNights(differenceInDays);
      setDiscountPercentage(Number(percentageDiff.toFixed(0)))
    },[stayNights,dates2, options2, earlyLoaderData.actualPrice, earlyLoaderData.cheapestPrice])


    const taxFeesIncludingDays = discountedPrice * totalNumberOfRooms * stayNights;
    const taxFeesExcludingDays = discountedPrice * totalNumberOfRooms;

    const markUpPriceIncludingDays = totalNumberOfRooms * earlyLoaderData.actualPrice * stayNights;
    const markUpPriceExcludingDays = totalNumberOfRooms * earlyLoaderData.actualPrice;

    const cheapestPriceIncludingDays = totalNumberOfRooms * earlyLoaderData.cheapestPrice * stayNights;
    const cheapestPriceExcludingDays = totalNumberOfRooms * earlyLoaderData.cheapestPrice ;

    const yourSavingPrice=(markUpPriceIncludingDays=3, cheapestPriceIncludingDays=2)=>{
      if(markUpPriceIncludingDays>1 && cheapestPriceIncludingDays >1){
        return markUpPriceIncludingDays - cheapestPriceIncludingDays
      }else{
        return totalNumberOfRooms * earlyLoaderData.actualPrice - totalNumberOfRooms * earlyLoaderData.cheapestPrice;
      }
    }

    const totalSaving = yourSavingPrice(markUpPriceIncludingDays,cheapestPriceIncludingDays)

    const totalPaybalePrice = cheapestPriceIncludingDays<1 ? cheapestPriceExcludingDays : cheapestPriceIncludingDays ;
    const finalTax = taxFeesIncludingDays < 1 ? taxFeesExcludingDays : taxFeesIncludingDays;
    const totalPaybalePriceIncludingTaxes =  finalTax + totalPaybalePrice;

    const finalDiscountedPrice = cheapestPriceIncludingDays<1 ? cheapestPriceExcludingDays : cheapestPriceIncludingDays;
    const finalMarkup = markUpPriceIncludingDays <1 ? markUpPriceExcludingDays : markUpPriceIncludingDays;
    const stayNightCount = stayNights<1 ? 1 : stayNights; 
    const taxIs = taxFeesIncludingDays <1 ? taxFeesExcludingDays : taxFeesIncludingDays

    const handleContinueToBook =()=>{
      console.log(hotelID,"inside func")
      const hotelInfo = {
        roomPrice:finalMarkup,
        yourSaving: totalSaving,
        taxesAndFees:taxIs, 
        totalPrice:totalPaybalePriceIncludingTaxes, 
        nightStay:stayNightCount,
        finalSellingPrice:finalDiscountedPrice,
        discountPercentage: discountPercentage,
        hotelID:hotelID,
      }
      if(!loginContext.user){
        navigate("/user/Sign_in");
      }else{
      dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
      localStorage.setItem('userDates', JSON.stringify(dates2));
      localStorage.setItem('userOptions', JSON.stringify(options2));
      localStorage.setItem('hotelInfo', JSON.stringify(hotelInfo));
      
      dispatch55({type:'BOOKING_STAGE_ONE', payload:hotelInfo })
      }
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
                    {/* <PriceWrapper smallvarient={false} data={earlyLoaderData} /> */}
                     <div className='priceWrapper'>
                     <span className='price'>{`₹${finalDiscountedPrice}`}</span>
                     <span className='markupPrice'><del>{`₹${finalMarkup}`}</del></span> 
                      <span className='discontOffer'>{discountPercentage}% off</span>
                     <p className='taxAndFees'>+ taxes & fees: ₹{ taxFeesIncludingDays < 1 ? taxFeesExcludingDays : taxFeesIncludingDays}</p>
                    </div>

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
                        <div className='classic' style={{display:'flex', justifyContent:'space-between'}}>
                          <span style={{display:'flex', alignItems:'center'}}><DoorFrontOutlinedIcon/>Classic</span>
                          <span> {stayNights<1 ? 1 : stayNights} {stayNights>1 ? "Night Stays" : "Night Stay"} </span>
                        </div>
                    </div>

                    <div className='dottedLines'></div>

                    <div className='hotelsFees'>
                        <span>Room Price</span>
                        {totalNumberOfRooms * earlyLoaderData.actualPrice * stayNights<1 ? <span>₹{totalNumberOfRooms * earlyLoaderData.actualPrice}</span> : <span>₹{totalNumberOfRooms * earlyLoaderData.actualPrice * stayNights}</span>}
                    </div>
                                        
                    <div className='taxesAndFees'>
                        <span>Your savings</span>
                        <span>₹{totalSaving}</span>
                    </div>

                    <div className='taxesAndFees'>
                        <span>Taxes & fees</span>
                        {taxFeesIncludingDays <1 ? <span>₹{taxFeesExcludingDays}</span> : <span>₹{taxFeesIncludingDays}</span> }
                    </div>

                    <div className='totalPrice'>
                        <div className='finalPrice'>
                            <span>Total price</span>
                            <span>₹{totalPaybalePriceIncludingTaxes}</span>
                        </div>
                            <p>Including taxes & fees</p>
                    </div>
                    
                  
                    <Link style={{textDecoration:'none'}} to={disableContinue ? "/user/signin/with_diffrent/account": `/918357/${dates2[0].startDate}/${dates2[0].endDate}/${Object.keys(options2).length}/${getSum()}/6yjiqv${randomNumberOne}76yu3457sf${earlyLoaderData._id}gctjl${randomNumberTwo}yh70j`} >
                      <button className='continueToBookzz' onClick={handleContinueToBook} >Continue to Book</button>
                    </Link>
            
                    <div className='policyBook'>
                        <p className="cancelPolicy" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Cancellation Policy <InfoOutlinedIcon sx={{fontSize:'18px'}}/>{openCancelationPolicy&&<CancelationPolicy />}</p>
                        <p className="cancelPolicy" onClick={()=>setSefetyMeasure(true)}>Follow safety measures advised at the hotel</p>
                        <p><span id='lastSpan'>By proceeding, you agree to our </span><Link to="/guest-policy/" target="_blank" style={{textDecoration:'none', color:'rgb(219, 91, 36)'}} >Guest Policies.</Link></p>
                    </div>


                </div>
            </div>
        
        </>
    )
}

export default BookCard;