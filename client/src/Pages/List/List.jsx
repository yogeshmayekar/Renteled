import {React, useState, useEffect, useContext} from 'react';
import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch.jsx';
import { SearchBarContext } from "../../context/searchBarContext.jsx";
import { IoLocationOutline } from "react-icons/io5";
import BasicPagination from '../../components/pagination/BasicPagination.jsx';
import indianCities from '../../cities.json';

const List=()=>{
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [openOptions, setOpenOptions] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    const [citiesDataLoading, setCitiesDataLoading]=useState(null);
    const { destination, dates, options, dispatch44 } = useContext(SearchBarContext);
    const [destination2, setDestination2] = useState(destination);
    const [dates2, setDates2] = useState(dates);
    const [options2, setOptions2] = useState(options);
    // console.log(destination2);

    const { data, loading, reFetch } = useFetch(
        `/hotels?city=${destination2}&min=${min || 0 }&max=${max || 999}`
    );

    const customTheme={
        rdrMonth :{
          width: "300px"
        }
    }

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

    const handleDateChange=(item)=>{
        setDates2([item.selection])
        dispatch44({ type: "NEW_UPDATE_SEARCH_DATES", payload: { dates2 }});
    }

    const handlePlaceInputChange = (e)=>{
        setDestination2(e.target.value);
    }

    const handleSearch =()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
        reFetch()
    }

    useEffect(()=>{
        setCitiesDataLoading(indianCities);
    },[])


    return(
        <>
          <div>
            <Navbar/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input
                            placeholder={destination ? destination : "Where are you going?" }
                            type="text"
                            className="headerSearchInput2"  
                            onChange={handlePlaceInputChange} 
                            onInput={()=>setOpenCity(true)} 
                            value={destination2} 
                            autocomplete="off" 
                            onClick={()=>setOpenCity(true)}
                            />
                            {openCity && citiesDataLoading &&  
                  <ul className="cityLists2" onMouseLeave={()=>setOpenCity(false)}> 
                    {citiesDataLoading.filter((item)=>{
                      const searchTerm = destination2.toLowerCase();
                      const fullAdress = item.name.toLowerCase();
                      return fullAdress.startsWith(searchTerm);
                    }).map((item, i)=>(
                      <li key={i} onClick={()=>setDestination2(`${item.name}, ${item.state}`)} ><IoLocationOutline /><span className='itemDetails'>{`${item.name}, ${item.state}`}</span></li>
                    ))}                   
                  </ul>
                
                }
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={()=>{setOpenDate(!openDate)}}  className="headerSearchText">{`${format(dates2[0].startDate, "dd/MM/yyyy")} to ${format(dates2[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item)=>handleDateChange(item)}
                            moveRangeOnFirstSelection={false}
                            ranges={dates2}
                            onMouseLeave={()=>{setOpenDate(false)}}
                            className='date2'
                            theme={customTheme} 
                            minDate={new Date()}
                            />}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions" style={{padding:'0'}}>
                            <div className="headerSearchItem3" onMouseLeave={()=>setOpenOptions(false)} onMouseEnter={()=>setOpenOptions(true)}>
                                <span className="headerSearchText2" onClick={()=>setOpenOptions(!openOptions)}><span className='sp1'>{ getSum() }</span> Guests - <span className='sp1'>{Object.keys(options2).length}</span> Room </span>
                                {openOptions && 
                                <div className="options2">
                                <div className="optionHeading"> 
                                    <div>Rooms</div>
                                    <div>Guests</div>
                                </div>
                                {Object.entries(options2).map(([roomNo, guests]) => (               
                                <div className="optionsItem" style={{margin:"15px 30px",width:'15rem', display:"flex", justifyContent:"space-between"}} key={roomNo}>
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
                                <div className="lsItem">
                                    <label className='sort__property'>Filters</label>
                                    <div className='sortby__price'>
                                        <label>Sort by price</label>
                                        <select className='sort__price__item'>
                                            <option value="">Premium</option>
                                            <option value="">low to high</option>
                                            <option value="">high to low</option>
                                        </select>
                                    </div>
                                    <div className='sortby__accom__type'>
                                        <label>Accomodation Type</label>
                                        <select className='sort__price__item'>
                                            <option value="">Hotels</option>
                                            <option value="">Apartments</option>
                                            <option value="">Resorts</option>
                                            <option value="">Villas</option>
                                            <option value="">Cabins</option>
                                        </select>
                                    </div>
                                    {/* <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" onChange={(e) => setMax(e.target.value)} /> */}

                                </div>
                               
                                {/* <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        // placeholder={options.room}
                                    />
                                </div> */}
                            </div>
                        </div>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className='hotels_search_container'>
                    <div className="listResult">
                        {loading ? "Loading Hotels" :
                        <>
                         {data.map((item)=>(
                            <SearchItem item={item} key={item._id}/>
                         ))}
                        </>}
                    </div>
                    <div className='pagination__container'>
                    <BasicPagination/>
                    </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
          </div>
        </>
    )
}

export default List;