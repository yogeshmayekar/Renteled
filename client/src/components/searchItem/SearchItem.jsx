import React from "react";
import "./searchItem.css";
import { useNavigate } from 'react-router-dom';

const SearchItem = () => {
  const navigate = useNavigate()

  // function to navigate page list to hotel page 
  const clickMeHotel =(e)=>{
    navigate("/hotels/1")
    e.preventDefault()
  }

  return (
    <div className="searchItem" onClick={clickMeHotel}>
      <img
        src="../Assets/room1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9  <span style={{paddingBottom:"10px"}}> &#9733;</span></button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">Check availibility</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;