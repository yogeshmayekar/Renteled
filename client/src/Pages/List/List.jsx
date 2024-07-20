import {React, useState, useEffect, useContext, useRef} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { format, parseISO } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch.jsx';
import { SearchBarContext } from "../../context/searchBarContext.jsx";
import { IoLocationOutline } from "react-icons/io5";
import BasicPagination from '../../components/pagination/BasicPagination.jsx';
import indianCities from '../../cities.json';
import notFoundImg from '../../Assets/hotel-not-found.jpg';

const List=()=>{
    const navigate =useNavigate();
    const { location, checkin, checkout } = useParams();
    const [openDate, setOpenDate] = useState(false);
    const [selectPriceValue, setSelectPriceValue]=useState();
    const [selectHotelType, setSelectHotelType]= useState("hotel");
    const [currentPage, setCurrentPage] = useState(1);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [openOptions, setOpenOptions] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    const [citiesDataLoading, setCitiesDataLoading]=useState(null);
    const { destination, dates, options, dispatch44 } = useContext(SearchBarContext);
    const [destination2, setDestination2] = useState(location || JSON.parse(localStorage.getItem('userDestination')) || destination);
    const [dates2, setDates2] = useState([{
      startDate: new Date(checkin),
      endDate: new Date(checkout),
      key: 'selection'
    }
  ] || dates);
    const [options2, setOptions2] = useState(JSON.parse(localStorage.getItem('userOptions')) || options);
    const searchDestinationRef = useRef(null);
    const searchDateRef = useRef(null);
    const searchOpenRef = useRef(null);
    const itemsPerPage = 100;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // console.log(destination2);
    // console.log("checkin date is", checkin)
    // console.log("checkout date is", checkout)

    const { data, loading, reFetch } = useFetch(
        `/hotels?search=${destination}&min=${min || 0 }&max=${max || 999}`
    );
    // console.log(data)

    
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
        // dispatch44({ type: "NEW_UPDATE_SEARCH_DATES", payload: { dates2 }});
    }

    const handlePlaceInputChange = (e)=>{
        setDestination2(e.target.value);
    }

    const handleSearch =()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
        localStorage.setItem('userDestination', JSON.stringify(destination2));
        localStorage.setItem('userDates', JSON.stringify(dates2));
        localStorage.setItem('userOptions', JSON.stringify(options2));
        reFetch()
        navigate(`/hotels/${destination2}/${dates2[0].startDate}/${dates2[0].endDate}`);
    }

    useEffect(()=>{
        setCitiesDataLoading(indianCities);
    },[])

    useEffect(()=>{
      dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2, options2 }});
    },[destination2,dates2, options2])


    var sortFunc;
    if(selectPriceValue==='lowToHigh'){
      sortFunc = (a,b)=>a.cheapestPrice - b.cheapestPrice
    }else if(selectPriceValue==='highToLow'){
      sortFunc = (a,b)=>b.cheapestPrice - a.cheapestPrice
    }

    // console.log(selectHotelType)
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
                            // onClick={()=>setOpenCity(true)} 

                            />
                            {openCity && citiesDataLoading &&  
                  <ul className="cityLists2" ref={searchDestinationRef} > 
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
                        <div className="lsItem" ref={searchDateRef}>
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
                            <div className="lsOptions" style={{padding:'0'}}  ref={searchOpenRef} >
                            <div className="headerSearchItem3" onClick={()=>setOpenOptions(true)} >
                                <span className="headerSearchText2"><span className='sp1'>{ getSum() }</span> Guests - <span className='sp1'>{Object.keys(options2).length}</span> Room </span>
                                {openOptions && 
                                <div className="options2">
                                <div className="optionHeading"> 
                                    <div>Rooms</div>
                                    <div>Guests</div>
                                </div>
                                {Object.entries(options2).map(([roomNo, guests]) => (               
                                <div className="optionsItem" style={{margin:"15px 10%",width:'80%', display:"flex", justifyContent:"space-between"}} key={roomNo}>
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
                                        <select 
                                        className='sort__price__item'
                                        value={selectPriceValue}
                                        onChange={(e)=>setSelectPriceValue(e.target.value)}
                                        >
                                            <option value="">Premium</option>
                                            <option value="lowToHigh">low to high</option>
                                            <option value="highToLow">high to low</option>
                                        </select>
                                    </div>
                                    <div className='sortby__accom__type'>
                                        <label>Accomodation Type</label>
                                        <select 
                                        className='sort__price__item'
                                        value={selectHotelType}
                                        onChange={(e)=>setSelectHotelType(e.target.value)}
                                        >
                                            <option value="hotel">Hotels</option>
                                            <option value="apartment">Apartments</option>
                                            <option value="resort">Resorts</option>
                                            <option value="villa">Villas</option>
                                            <option value="cabin">Cabins</option>
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
                    {data.length>0 && <div className="listResult">
                        {loading ? "Loading Hotels" :
                        <>
                         {data.slice(startIndex, endIndex).sort(sortFunc).filter((data=>data.type === selectHotelType)).map((item,i)=>(
                          
                            <SearchItem item={item} key={item._id} dateData={dates2}/>
                         ))}
                        </>}
                    </div>}
                    {data.length<1 && <div className='property_notFound'>
                      <img src={notFoundImg} className='image_hotelNotFound' alt="" />
                      <p>Sorry! No property found at this location. Try searching for another property or changing the location to find more options.</p>
                    </div>}
                    <div className='pagination__container'>
                    {data.length>itemsPerPage &&<BasicPagination data={data} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
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