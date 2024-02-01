import React from "react";
import "./hotelbody.css";
import { BiWifi } from "react-icons/bi";
import { TbAirConditioningi } from "react-icons/tb";
import { LuAirplay } from "react-icons/lu";
import { CgSmartHomeBoiler } from "react-icons/lu";
import { ImPowerCord } from "react-icons/im";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Hotelbody = ()=>{
    return(
        <>
        <div className="hotelBodyContainer">
            <div className="chield-left">
                <div className="hotelName">
                    <div className="HotelName11">
                        <h1>OYO Corinthia Boutique Rooms Near Candolim Beach</h1>
                    </div>
                    <div className="HotelName12">
                        <button>4.5  &#9733;</button>
                    </div>
                </div>
                <div className="hotelAdress">
                    <span>1, Spice Garden, Aguada-siolim Road, Candolim, Bardez, Goa</span>
                </div>
                <div className="hotelDescription">
                    <div className="descHead">
                        <h1>Description</h1>
                    </div>
                    <div className="descBody">
                        <p>
                        Located near Aguada Fort, Hotel OYO 85326 Corinthia Boutique Rooms is a budget hotel with standardised amenities at the best value. Located in Goa, this hotel is 18 km from Dona Paula View Point and 5 km from the Aguada Fort. Guests can enjoy amenities such as power backup, housekeeping, and room service.

                        <br/>

                        <strong>Special Features</strong>
                        You will be able to enjoy comfortable rooms at our hotel with AC, a TV, and a fan.

                        <br/>
                        This cozy hotel has amazing amenities like a fire-extinguisher, water purifier and sanitizer. There is also a reception area, security and towels to use.

                        <br/>

                        <strong>Location & Transportation</strong>                    
                        The accommodation is conveniently stationed 19 km from Basilica of Bom Jesus, 2 km from Sinquerim Beach and 41 km from Colva Beach. Vasco-Da-Gama Railway Station is 36 km from the hotel. The hotel is a 40 km drive from Goa International Airport.
                        </p>
                        <span className="readMore">Read more</span>
                        <span className="readLess">Read Less</span>
                    </div>
                    
                </div>
                <div className="hotelAmenities">
                    <div className="anemityHead">
                        <h2>Amenities</h2>
                    </div>
                    <div className="anemitybody">
                        <div className="item1">
                            {/* icon */}
                            <TbAirConditioningi/>
                            <span>AC</span>
                        </div>
                        <div className="item2">
                            {/* icon */}
                            <LuAirplay/>
                            <span>TV</span>
                        </div>
                        <div className="item3">
                            {/* icon  */}
                            <BiWifi/>
                            <span>Free Wifi</span>
                        </div>
                        <div className="item4">
                            {/* icon  */}
                            <CgSmartHomeBoiler/>
                            <span>Geyser</span>
                        </div>
                        <div className="item5">
                            {/* icon  */}
                            <ImPowerCord/>
                            <span>Power backup</span>
                        </div>
                        <div className="item6">
                            {/* icon  */}
                            <AiOutlineCheckCircle/>
                            <span>Reception</span>
                        </div>
                    </div>

                </div>
                <div className="hotelRatingsAndReviews">
                    
                </div>
                <div className="hotelPolicies">
                    <div className="policyHead">
                        <h2>Hotel policies</h2>
                    </div>
                    <div className="policybody">
                        <div className="checkIn">
                            <p>Check-in</p>
                            <button>12:00 PM</button>
                        </div>
                        <div className="checkOut">
                            <p>Check-out</p>
                            <button>11:00 PM</button>
                        </div>
                        <div className="policyDetails">
                            <ul>
                                <li>Couples are welcome</li>
                                <li>Guests can check in using any local or outstation ID proof (PAN card not accepted).</li>
                                <li>As a complimentary benefit, your stay is now insured. </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="WhatsNearby">
                    <div className="watsNew">
                        <h2>What's nearby?</h2>
                    </div>
                    <div className="watsnameBody">
                        <span>OYO Corinthia Boutique Rooms Near Candolim Beach</span>
                    </div>
                </div>
            </div>
            <div className="chield-right">

            </div>
        </div>
        </>
    )
}

export default Hotelbody;