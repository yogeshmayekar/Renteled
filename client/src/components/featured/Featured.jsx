import React from 'react';
import jaipur from '../../Assets/jaipur34.jpg';
import goa from '../../Assets/goa34.avif';
import bangalore from '../../Assets/bangalore33.jpg';
import mumbai from '../../Assets/mumbai33.webp';
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import './featured.css';
import useFetch from "../../hooks/useFetch.jsx";

function Featured(){
    const { data, loading, error } =  useFetch(
        "/hotels/countByCity?cities=berlin,madrid,london"
      );
    //   console.log(data)
    return(
        <div className="featuredContainer">
            {loading || error  ? (
        "Loading please wait"
      ) : (
        <>
         <Splide hasTrack={false}
        options={{
          type: "loop", 
          gap: "1rem",
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          resetProgress: false,
          perPage: 1,
          perMove: 1,
          speed: 2000,
          arrows: false,
          hideToc: true,
          pagination: false,
        }}
        aria-labelledby="autoplay-example-heading">
                <SplideTrack>
                    <SplideSlide>
                    <div className="featuredItems">
                <img src={jaipur} alt="jaipur" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Jaipur</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="featuredItems">
                <img src={goa} alt="Goa" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Goa</h1>
                    <h2>{data[1]} Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="featuredItems">
                <img src={bangalore} alt="Bangalore" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Bangalore</h1>
                    <h2>{data[2]} Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <div className="featuredItems">
                <img src={mumbai} alt="Bangalore" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Mumbai</h1>
                    <h2>{data[3]} Properties</h2>
                </div>
            </div>
                </SplideTrack>
            </Splide>
        </>
      )}     
        </div>
    )
}

export default Featured;