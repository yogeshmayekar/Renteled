import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useContext, useEffect, useRef } from 'react';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css';
import { format }from "date-fns";
import { useNavigate } from 'react-router-dom';
import { SearchBarContext } from '../../context/searchBarContext';
import { ErrorContext } from '../../context/errorContext';
import { IoLocationOutline } from "react-icons/io5";
import indianCities from '../../cities.json';

function Header(){
    const { dispatch44, dates, destination, options } = useContext(SearchBarContext);
    const [openDate, setOpenDate] = useState(false);
    const [destination1, setDestination1] = useState(JSON.parse(localStorage.getItem('userDestination')) || destination || "");
    const [dates1, setDates1] = useState(dates);
  const [openOptions, setOpenOptions] = useState(false);
  const [options1, setOptions1] = useState( JSON.parse(localStorage.getItem('userOptions')) || options || {
    "Room 1": 1, 
  });
  const [openCity, setOpenCity] = useState(false);
  const [citiesDataLoading, setCitiesDataLoading]=useState(null);

  const navigate = useNavigate();
  const searchDestinationRef = useRef(null);
  const searchDateRef = useRef(null);
  const searchOpenRef = useRef(null);
  // console.log(destination)

  const getSum = () => {
    const sum = Object.values(options1).reduce((acc, value) => acc + value, 0);
    return sum;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchDestinationRef.current && !searchDestinationRef.current.contains(event.target)) {
        setOpenCity(false);
      }
    };
    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [searchDestinationRef, setOpenCity, setOpenDate]);
  


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

  const customTheme={
    rdrMonth :{
      // width: "300px"
    }
  }

  
  useEffect(()=>{
    setCitiesDataLoading(indianCities);
  },[])
  

 
  const { setHasError, dispatch22 } = useContext(ErrorContext);
  // console.log(dispatch22);

  const handleSearch = (e)=>{
    if(!destination1){
      setHasError(true);
      dispatch22({ errorMessage:"Destination is required, Please tell us where are you going?" });
    }else{
      dispatch44({ type: "NEW_SEARCH", payload: { destination1, dates1, options1 }});
      localStorage.setItem('userDestination', JSON.stringify(destination1));
      localStorage.setItem('userDates', JSON.stringify(dates1));
      localStorage.setItem('userOptions', JSON.stringify(options1));
      navigate(`/hotels/${destination1}/${dates1[0].startDate}/${dates1[0].endDate}`);
      e.preventDefault();
    }
  }

  const addNewRoom = ()=>{
    const newRoomName = `Room ${Object.keys(options1).length + 1}`;
      setOptions1((prevGuestCount) => ({
        ...prevGuestCount,
        [newRoomName]: 1,
      }));
  }

    const removeRoom=()=>{
      const keys = Object.keys(options1);

      if (keys.length >= 2) {
      const lastKey = keys[keys.length - 1];

      const updatedObject = { ...options1 };
      delete updatedObject[lastKey];

      setOptions1(updatedObject);
    }
  }

    const addGuest=(roomNo, guests)=>{
      if(guests<=2){
        setOptions1((prevGuestCount) => ({
          ...prevGuestCount,
          [roomNo]: prevGuestCount[roomNo] + 1,
        }));
      }
      
    }

    const removeGuest =(roomNo, guests)=>{
      if(guests>=2){
        setOptions1((prevGuestCount) => ({
          ...prevGuestCount,
          [roomNo]: prevGuestCount[roomNo] - 1,
        }));
      }
    }

    const handlePlaceInputChange = (e)=>{
      setDestination1(e.target.value);
    }



    return(
        <>
        <div className="header">
            <div className="headerContainer">
             <div className="headerList">
                <div className="headerListItem actives">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Stays</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
                </div>
             </div>
             <div>
             <h1 className="headerTitle">Looking for a discounts? Get it now</h1>
             <p className="headerDesc">Get rewared for your room booking - unlock instant savings of 10% or more with a free Renteled account</p>
             </div>  
             <div className="headerSearch">
                <div className="headerSearchItem" ref={searchDestinationRef} >
                    <FontAwesomeIcon icon={faBed} className="headerIcon" />
                    <input 
                    type="text" 
                    name='searchInput' 
                    placeholder='Where are you going?' 
                    className="headerSearchInput"  
                    onChange={handlePlaceInputChange} 
                    onInput={()=>setOpenCity(true)} 
                    value={destination1} 
                    autocomplete="off" 
                    onClick={()=>setOpenCity(true)} />
                {openCity && citiesDataLoading.length > 0  &&  
                  <ul className="cityLists"> 
                    {citiesDataLoading.filter((item)=>{
                      const searchTerm = destination1.toLowerCase();
                      const fullAdress = item.name.toLowerCase();
                      return fullAdress.startsWith(searchTerm);
                    }).map((item, i)=>(
                      <li key={i} onClick={()=>setDestination1(`${item.name}, ${item.state}`)} ><IoLocationOutline /><span className='itemDetails'>{`${item.name}, ${item.state}`}</span></li>
                    ))}                   
                  </ul>
                
                }
                </div>
                <div className="headerSearchItem" ref={searchDateRef}>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=>{setOpenDate(!openDate)}}  className="headerSearchText">{`${format(dates1[0].startDate, "dd/MM/yyyy")} to ${format(dates1[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDates1([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates1}
                className='date'
                theme={customTheme} 
                minDate={new Date()}
                />}
                </div>
                <div className="headerSearchItem" ref={searchOpenRef} >
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText2" style={{color:'rgb(82, 68, 68)',fontWeight:600, fontSize:'16px'}} onClick={()=>setOpenOptions(!openOptions)}><span className='sp1'>{ getSum() }</span> Guests - <span className='sp1'>{Object.keys(options1).length}</span> Room </span>
                {openOptions && <div className="options">
                  <div className="optionHeading"> 
                    <div>Rooms</div>
                    <div>Guests</div>
                  </div>

                 {Object.entries(options1).map(([roomNo, guests]) => (               
                 <div className="optionsItem" key={roomNo}>
                  <span className="optionText">{roomNo}</span>
                  <div className="optionCounter">
                    <button className='optionCounterBtn'  onClick={()=>removeGuest(roomNo, guests)}>-</button>              
                    <p className="optionCounterNum" >{guests}</p>
                    <button className='optionCounterBtn'  onClick={()=>addGuest(roomNo, guests)} >+</button>
                  </div>
                </div>))}
                <div className="addHotelContainer" >
                  <div className="deleteHotel" onClick={removeRoom} style={{ color: Object.keys(options1).length>=2 ? 'rgb(52, 40, 40)' : 'inherit' }} >
                    Delete Room
                  </div>
                  <div className="addHotel" onClick={addNewRoom} >
                    Add Room
                  </div>
                </div> 
                </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn2" onClick={handleSearch} >Search</button>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}

export default Header;