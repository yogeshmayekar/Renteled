import React from "react";
import "./searchItem.css";
import { Link } from 'react-router-dom';
import Slider2 from '../../components/splider/Slider2'

const SearchItem = (props) => {
  const randomNumberOne = Math.floor(Math.random() * 900000) + 100000;
  const randomNumberTwo = Math.floor(Math.random() * 9000) + 1000;
  return (
    <div className="searchItem" >
      
      <div className="siImg">
      <Slider2 perPages={1} width={"230px"} height={"200px"} />
      </div>
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
          <Link to={`/hotels/jiqv${randomNumberOne}yu3457sf${props.item._id}gctjl${randomNumberTwo}yh`} target="_blank" >
            <button className="siCheckButton">Check availibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;