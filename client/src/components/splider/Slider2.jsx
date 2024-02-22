import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./slider.css";
import image1 from '../../Assets/h1.webp';
import image2 from '../../Assets/h2.avif';
import image3 from '../../Assets/h3.avif';
import image4 from '../../Assets/h4.avif';


const Slider2 = ({perPages, width="", height=""})=>{
    return(
        <>
        <div className="splider-container">
        <Splide aria-label="My Favorite Images" className="image42"  options={ {
        gap   : '.3%',
        perPage:perPages,
      } }>
            <SplideSlide>
                <img src={image1} alt="" width={width} height={height}  className="image43" />
            </SplideSlide>
            <SplideSlide>
                <img src={image2} width={width} height={height}  alt=""/>
            </SplideSlide>
            <SplideSlide>
                <img src={image3} width={width} height={height}  alt=""/>
            </SplideSlide>
            <SplideSlide>
                <img src={image4} width={width} height={height}   alt=""/>
            </SplideSlide>
        </Splide>
        </div>
        
        </>
    )
}

export default Slider2;