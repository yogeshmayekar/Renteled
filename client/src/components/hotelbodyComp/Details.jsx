import React, { useState } from 'react';
import './details.css';
import { Link } from 'react-router-dom';
import { TbAirConditioning } from "react-icons/tb"; //AC icon imported
import { LuMonitor } from "react-icons/lu"; //TV icon imported
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import CheckIcon from '@mui/icons-material/Check';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PowerIcon from '@mui/icons-material/Power';
import BathroomIcon from '@mui/icons-material/Bathroom';
// import TvIcon from '@mui/icons-material/Tv';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';
import ReviewComponent from '../reviewComponent/ReviewComponent';

const Details =({earlyLoaderData, setOpenAllReviews, reviewData})=>{
    // console.log(earlyLoaderData)
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

                {earlyLoaderData.amenities && <div className='facility'>
                    <h2>Amenities</h2>
                    <ul className='facilityList'>
                        {earlyLoaderData.amenities.isFreeWifi &&<li><span className='iconFac'><NetworkWifi3BarIcon /></span><span>Free Wifi</span></li>}
                        {earlyLoaderData.amenities.isAc && <li><span className='iconFac'><TbAirConditioning style={{fontSize:'25px'}}/></span> <span>AC</span></li>}
                        {earlyLoaderData.amenities.isTv && <li><span className='iconFac'><LuMonitor style={{fontSize:'25px'}} /></span><span>TV</span></li>}
                        {earlyLoaderData.amenities.isGeyser && <li><span className='iconFac'><BathroomIcon /></span><span>Geyser</span></li>}
                        {earlyLoaderData.amenities.isPowerBackup && <li><span className='iconFac'><PowerIcon/></span><span>Power backup</span></li>}
                        {earlyLoaderData.amenities.isDailyHoueKeeping && <li><span className='iconFac'><CheckIcon /></span><span>Daily housekeeping</span></li>}
                        {showMore &&
                        <>
                        {earlyLoaderData.amenities.isCardPayment && <li><span className='iconFac'><CreditCardIcon/></span><span>Card payment</span></li>}
                        {earlyLoaderData.amenities.isCCTv && <li><span className='iconFac'><CameraOutdoorIcon/></span><span>CCTV cameras</span></li>}
                        {earlyLoaderData.amenities.isPrivateEntrence && <li><span className='iconFac'><CheckIcon/></span><span>Private entrance</span></li>}
                        {earlyLoaderData.amenities.isAnyTimeCheckout && <li><span className='iconFac'><MoreTimeIcon /></span><span>24/7 check-in</span></li>}
                        {earlyLoaderData.amenities.isFireExtinguisher && <li><span className='iconFac'><CheckIcon /></span><span>Fire extinguisher</span></li>}
                        {earlyLoaderData.amenities.isAttachedBathroom && <li><span className='iconFac'><CheckIcon /></span><span>Attached bathroom</span></li>}
                        </>
                        }
                    </ul>
                    {showMore ? <button onClick={()=>setShowMore(!showMore)} >Show less</button> :
                    <button onClick={()=>setShowMore(!showMore)}>Show More</button>}
                </div>}

                <ReviewComponent  setOpenAllReviews={setOpenAllReviews} reviewData={reviewData} />
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