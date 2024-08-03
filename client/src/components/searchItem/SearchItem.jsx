import React, { useContext } from "react";
import "./searchItem.css";
import { Link } from 'react-router-dom';
import Slider2 from '../../components/splider/Slider2'
import PriceWrapper from "../priceWrapper/PriceWrapper";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IsSponsered from '../isSponsered/IsSponsered';
import { SearchBarContext } from "../../context/searchBarContext";

const  SearchItem = (props) => {
  // const [reviewStatus, setReviewStatus]= useState("Excellent")
  const { destination, dates } = useContext(SearchBarContext);
  const randomNumberOne = Math.floor(Math.random() * 900000) + 100000;
  const randomNumberTwo = Math.floor(Math.random() * 9000) + 1000;

  const reviewStatus =()=>{
    if(props.item.rating<2){
      return "Poor Service"
    }else if(props.item.rating<3.1){
      return "Average"
    }else{
      return "Excellent"
    }
  }

// console.log("dateinsearchitem",props.item.rooms)

  return (
    <div className="searchItem" >
      
      <div className="siImg">
      <Slider2 perPages={1} width={"230px"} height={"200px"} />
      </div>
      <div className="siDesc">
        <h1 className="siTitle">{props.item.name}</h1>
        <span>{props.item.city}</span>
        <span className="siDistance">{props.item.distance}</span>
        {/* <div className="siSubtitle">
          <span><LocationOnIcon sx={{fontSize:'18px', color:'rgb(239, 65, 22)'}}/> </span>
          <span className="awayDist">5 k.m away from you</span>
        </div> */}
        <span className="siFeatures">
        {props.item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
        {props.item.featured && <IsSponsered/>}
      </div>
      <div className="siDetails">
        {props.item.rating ? <div className="siRating">
          <span>{reviewStatus()}</span>
          <button>{props.item.rating}<span style={{paddingBottom:"10px"}}> &#9733;</span></button>
        </div> :
        <div className="siRating2">
        <span>Excellent Hotel</span>
        </div>}
        <div className="siDetailTexts">
          {/* <span className="siPrice">{props.item.cheapestPrice}</span> */}
          <PriceWrapper smallvarient={true} data ={props.item} />
          <Link to={`/hotels/6yjiqv${randomNumberOne}76yu3457sf${props.item._id}gctjl${randomNumberTwo}yh70j${props.item.name}/${destination}/${dates[0].startDate}/${dates[0].endDate}`} target="_blank" >
            <button className="siCheckButton">Check availibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;