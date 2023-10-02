import React from 'react';
import jaipur from '../../Assets/jaipur34.jpg';
import goa from '../../Assets/goa34.avif';
import bangalore from '../../Assets/bangalore33.jpg';
import mumbai from '../../Assets/mumbai33.webp';
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import './featured.css';

function Featured(){
    return(
        <div className="featuredContainer">
            <Splide hasTrack={false}
        options={{
          type: "loop", 
          gap: "1rem",
          autoplay: true,
          interval: 10000,
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
                    <h2>543 Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="featuredItems">
                <img src={goa} alt="Goa" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Goa</h1>
                    <h2>064 Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div className="featuredItems">
                <img src={bangalore} alt="Bangalore" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Bangalore</h1>
                    <h2>316 Properties</h2>
                </div>
            </div>
                    </SplideSlide>
                    <div className="featuredItems">
                <img src={mumbai} alt="Bangalore" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Mumbai</h1>
                    <h2>528 Properties</h2>
                </div>
            </div>
                </SplideTrack>
            </Splide>
            
        </div>
    )
}

export default Featured;