import "./propertyList.css";
import useFetch from '../../hooks/useFetch.jsx';
import hotels from "../../Assets/hotels.jpg";
import appartments from "../../Assets/appartments.jpg";
import resort from "../../Assets/resort.jpg";
import villas from "../../Assets/villas.jpg";
import cabins from "../../Assets/cabins.jpg";

const PropertyList = ()=>{
    const { data, loading, error } =  useFetch("/hotels/countByType");

      const imagesUrl = [hotels, appartments, resort, villas, cabins]
    return (
        <>
        <div className="propertlist">
        {loading ? (
        "loading"
      ) : ( <>
        { data && imagesUrl.map((img, i)=>(
               <div className="properyItems" key={i}>
               <img src={img} alt="" className="propertyImage" />
               <div className="propertTitles">
                   <h1>{data[i]?.type}</h1>
                   <h2>{data[i]?.count} {data[i]?.type}</h2>
               </div>
           </div> 
            ))}
      </>
        )}
        </div>
        </>
    )

}

export default PropertyList;