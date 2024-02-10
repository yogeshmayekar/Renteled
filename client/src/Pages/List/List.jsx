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
import indianCities from '../../cities.json';

const List=()=>{
    const [openDate, setOpenDate] = useState(false);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [openCity, setOpenCity] = useState(false);
    const [citiesDataLoading, setCitiesDataLoading]=useState(null);
    const [destination2, setDestination2] = useState("");
    const [dates2, setDates2] = useState([{
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        key: 'selection'
      }
    ]);
    // console.log(destination2);

    const { destination, dates, options, dispatch44 } = useContext(SearchBarContext);
    const { data, loading, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
    );

    const customTheme={
        rdrMonth :{
          width: "300px"
        }
    }

    const handleSearch =()=>{
        dispatch44({ type: "NEW_UPDATE_SEARCH", payload: { destination2, dates2}});
        reFetch()
    }

    const handlePlaceInputChange = (e)=>{
        setDestination2(e.target.value);
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
                        <div className="lsItem" >
                            <label>Check-in Date</label>
                            <span onClick={()=>{setOpenDate(!openDate)}}  className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
                            {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item)=>setDates2([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            onMouseLeave={()=>{setOpenDate(false)}}
                            className='date2'
                            theme={customTheme} 
                            minDate={new Date()}
                            />}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText" >
                                        Min price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput"  onChange={(e) => setMin(e.target.value)} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input type="number" className="lsOptionInput" onChange={(e) => setMax(e.target.value)} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options}
                                    />
                                </div>
                               
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? "Loading Hotels" :
                        <>
                         {data.map((item)=>(
                            <SearchItem item={item} key={item._id}/>
                         ))}
                        </>}
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