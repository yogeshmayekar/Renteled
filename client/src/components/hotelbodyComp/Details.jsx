import React, { useState } from 'react';
import './details.css';
import { Link } from 'react-router-dom';
import { CiWifiOn } from "react-icons/ci"; //wifi icon imported
import { TbAirConditioning } from "react-icons/tb"; //AC icon imported
import { LuMonitor } from "react-icons/lu"; //TV icon imported
import { CiPower } from "react-icons/ci";//power backup icon imported
import { MdFileDownloadDone } from "react-icons/md"; // house keeping done icon imported
import { PiShowerThin } from "react-icons/pi"; //shower icon imported

const Details =({earlyLoaderData})=>{
    // console.log(earlyLoaderData.description)
    const[showMore, setShowMore]=useState(false);
    return(
        <>
            <div className='hotelDetailsInfoContainer'>
                <div className='hotelHeadConn'>
                    <div className='nameOfHotel'>
                        <h1>{earlyLoaderData.name}</h1>
                        <p>{earlyLoaderData.adress}</p>
                    </div>
                    <div className='newConn'>
                        <button>NEW</button>
                    </div>
                </div>

                <div className='hotelDesc'>
                    <h2>Description</h2 >
                    <p>{earlyLoaderData.description}</p>
                </div>

                <div className='facility'>
                    <h2>Amenities</h2>
                    <ul className='facilityList'>
                        <li><span className='iconFac'><CiWifiOn /></span><span>Free Wifi</span></li>
                        <li><span className='iconFac'><TbAirConditioning /></span> <span>AC</span></li>
                        <li><span className='iconFac'><LuMonitor /></span><span>TV</span></li>
                        <li><span className='iconFac'><PiShowerThin /></span><span>Geyser</span></li>
                        <li><span className='iconFac'><CiPower /></span><span>Power backup</span></li>
                        <li><span className='iconFac'><MdFileDownloadDone /></span><span>Daily housekeeping</span></li>
                    </ul>
                    {showMore ? <button onClick={()=>setShowMore(!showMore)} >Show less</button> :
                    <button onClick={()=>setShowMore(!showMore)}>Show More</button>}
                </div>

                <div className='hotelPolicy'>
                    <h2>Hotel policies</h2>
                    <div className='hotelTiming'>
                        <div className='checkIn'>
                            <p>Check-in</p>
                            <button>12:00 PM</button>
                        </div>
                        <div className='middleLine'></div>
                        <div className='chechOut'>
                            <p>Check-out</p>
                            <button>11:00 AM</button>
                        </div>
                        
                    </div>
                    <div className='policyList'>
                        <ul>
                            <li>Couples are welcome</li>
                            <li>Guests can check in using any local or outstation ID proof (PAN card not accepted).</li>
                            <li>As a complimentary benefit, your stay is now insured by Deco.</li>
                            <li>This hotel is serviced under the trade name of Svasthi Homes as per quality standards of Renteled</li>
                        </ul>
                        
                    </div>
                    <div className='gaustPolicy'>
                    <button><Link to="/guest-policy/" target="_blank" style={{textDecoration:"none", color:"#072D5C"}}>View Guest Policy</Link></button>
                    </div>
                    
                </div>
            </div>
        </>
    ) 
}

export default Details;