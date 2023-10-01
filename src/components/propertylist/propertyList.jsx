import "./propertyList.css";
import hotels from "../../Assets/hotels.jpg";
import appartments from "../../Assets/appartments.jpg";
import resort from "../../Assets/resort.jpg";
import villas from "../../Assets/villas.jpg";
import cabins from "../../Assets/cabins.jpg"

const PropertyList = ()=>{
    return (
        <>
        <div className="propertlist">
            <div className="properyItems">
                <img src={hotels} alt="" className="propertyImage" />
                <div className="propertTitles">
                    <h1>Hotels</h1>
                    <h2>173 hotels</h2>
                </div>
            </div>
            <div className="properyItems">
                <img src={appartments} alt="" className="propertyImage" />
                <div className="propertTitles">
                    <h1>Apartments</h1>
                    <h2>173 hotels</h2>
                </div>
            </div>
            <div className="properyItems">
                <img src={resort} alt="" className="propertyImage" />
                <div className="propertTitles">
                    <h1>Resorts</h1>
                    <h2>173 hotels</h2>
                </div>
            </div>
            <div className="properyItems">
                <img src={villas} alt="" className="propertyImage" />
                <div className="propertTitles">
                    <h1>Villas</h1>
                    <h2>173 hotels</h2>
                </div>
            </div>
            <div className="properyItems">
                <img src={cabins} alt="" className="propertyImage" />
                <div className="propertTitles">
                    <h1>Cabins</h1>
                    <h2>173 hotels</h2>
                </div>
            </div>
        </div>
        </>
    )

}

export default PropertyList;