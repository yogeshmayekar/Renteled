import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useContext} from 'react';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css';
import { format }from "date-fns";
import { useNavigate } from 'react-router-dom';
import { SearchBarContext } from '../../context/searchBarContext';


function Header(){
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(true);
  const [options, setOptions] = useState({
    adult:1,
    room:1
  });
 
  const navigate = useNavigate();

  const handleOption=(name, operation)=>{
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ? options[name]+1 : options[name]-1,
    }})

  }

  const { dispatch } = useContext(SearchBarContext);

  const handleSearch = (e)=>{
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options }});
    navigate("/hotels", {state:{destination, dates, options}});
    e.preventDefault()
  }

  // const handleSignIn = (e)=>{
  //   navigate("/user/Sign-in");
  //   e.preventDefault();
  // }
  
  // const handleRegister = (e)=>{
  //   navigate("/user/Sign-Up");
  //   e.preventDefault();
  // }
  const handleAdminLogin = (e)=>{
    navigate("/user/admin-register");
    e.preventDefault();
  }

  // var [maxGuestsCount, setmaxGuestsCount] = useState(3);
  // const handleRoomClick=()=>{
  //   handleOption("room", "i");
  //   if(options.adult >= options.room){
  //     setmaxGuestsCount(maxGuestsCount+3);
  //   }
    
  // }

  // const removeRoomClick=()=>{
  //   handleOption("room", "d");
  //   setmaxGuestsCount(maxGuestsCount-3);
  //   setOptions((prev)=>({
  //     ...prev,
  //     adult: Number(options.adult) - 3
  //   }));
  // }


    return(
        <>
        <div className="header">
            <div className="headerContainer">
             <div className="headerList">
                <div className="headerListItem active">
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
             <h1 className="headerTitle">Looking for a discounts? Get it now</h1>
             <p className="headerDesc">Get rewared for  your room booking - unlock instant savings of 10% or more with a free Renteled account</p>
             <button className="headerBtn" onClick={handleAdminLogin}>Admin Login</button>
             <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='Where are you going?' className="headerSearchInput" onChange={e=> setDestination(e.target.value)} />
                </div>
                <div className="headerSearchItem" onMouseLeave={()=>{setOpenDate(false)}}>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={()=>{setOpenDate(!openDate)}}  className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dates}
                className='date' 
                />}
                </div>
                <div className="headerSearchItem" onMouseLeave={()=>setOpenOptions(false)}>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText2" onClick={()=>setOpenOptions(!openOptions)}>{`${ options.adult } adult- ${options.room}  room`}</span>
                {openOptions && <div className="options">
                  <div className="optionHeading"> 
                    <div>Rooms</div>
                    <div>Guests</div>
                  </div>

                  <div className="optionsItem">
                    <span className="optionText">Room 1</span>
                    <div className="optionCounter">
                      <button className='optionCounterBtn' disabled={options.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNum" >{options.adult}</span>
                      <button className='optionCounterBtn' disabled={options.adult >= 3} onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                          
                  <div className="optionsItem">
                    <span className="optionText">Room 1</span>
                    <div className="optionCounter">
                      <button className='optionCounterBtn' disabled={options.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNum" >{options.adult}</span>
                      <button className='optionCounterBtn' disabled={options.adult >= 3} onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  
                  <div className="optionsItem">
                    <span className="optionText">Room 1</span>
                    <div className="optionCounter">
                      <button className='optionCounterBtn' disabled={options.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                      <span className="optionCounterNum" >{options.adult}</span>
                      <button className='optionCounterBtn' disabled={options.adult >= 3} onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>

                  <div className="addHotelContainer">
                    <div className="deleteHotel">
                      Delete Room
                    </div>
                    <div className="addHotel">
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