import "./reviewList.css";
import image1 from "../../Assets/room1.jpg";

const ReviewList = () =>{
    return(
        <div className="reviewPageContainer">
        <div className="reviewPage">
            <img src={image1} alt="" className="reviewImage" />
            <span className="hotelName">Hotel 1 premium</span>
            <span className="hotelCity">Karwar</span>
            <span className="hotelPrice">Starting from Rs 1999</span>
            <div className="hotelReview">
                <button>7.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="reviewPage">
            <img src={image1} alt="" className="reviewImage" />
            <span className="hotelName">Hotel 1 premium</span>
            <span className="hotelCiity">Karwar</span>
            <span className="hotelPrice">Starting from Rs 1999</span>
            <div className="hotelReview">
                <button>7.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="reviewPage">
            <img src={image1} alt="" className="reviewImage" />
            <span className="hotelName">Hotel 1 premium</span>
            <span className="hotelCiity">Karwar</span>
            <span className="hotelPrice">Starting from Rs 1999</span>
            <div className="hotelReview">
                <button>7.5</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="reviewPage">
            <img src={image1} alt="" className="reviewImage" />
            <span className="hotelName">Hotel 1 premium</span>
            <span className="hotelCiity">Karwar</span>
            <span className="hotelPrice">Starting from Rs 1999</span>
            <div className="hotelReview">
                <button>7.5</button>
                <span>Excellent</span>
            </div>
        </div>
        </div>
    )
}

export default ReviewList;