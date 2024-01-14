import React from "react";
import "./searchItem.css";
import { Link } from 'react-router-dom';

const SearchItem = (props) => {

  return (
    <div className="searchItem" >
      <img
        src={props.item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.item.name}</h1>
        <span className="siDistance">{props.item.distance}</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
        {props.item.desc}
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
          <span className="siPrice">{props.item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${props.item._id}`}>
            <button className="siCheckButton">Check availibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;