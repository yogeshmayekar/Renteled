import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './header.css'
import { format }from "date-fns";

function Header(){
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1
  });

  const handleOption=(name, operation)=>{
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ? options[name]+1 : options[name]-1,
    }})

  }
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
             <p className="headerDesc">Get rewared for  your travel - unlock instant savings of 10% or more with a free Renteled account</p>
             <button className="headerBtn">Sign in / Register</button>
             <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder='Where are you going?' className="headerSearchInput" />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onMouseEnter={()=>{setOpenDate(!openDate)}} onMouse={()=>{setOpenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult- ${options.children} children- ${options.room} room`}</span>
                {openOptions && <div className="options">
                  <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button className='optionCounterBtn' disabled={options.adult <=1} onClick={()=>handleOption("adult", "d")}>-</button>
                    <span className="optionCounterNum">{options.adult}</span>
                    <button className='optionCounterBtn' onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button className='optionCounterBtn' disabled={options.children <=0} onClick={()=>handleOption("children", "d")}>-</button>
                    <span className="optionCounterNum">{options.children}</span>
                    <button className='optionCounterBtn' onClick={()=>handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button className='optionCounterBtn' disabled={options.room <=1} onClick={()=>handleOption("room", "d")}>-</button>
                    <span className="optionCounterNum">{options.room}</span>
                    <button className='optionCounterBtn' onClick={()=>handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn2">Search</button>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}

export default Header;